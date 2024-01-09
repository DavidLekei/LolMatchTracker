import {useState, useEffect} from 'react'
import NewStat from './NewStat'

import CircularProgressWithText from '../Common/CircularProgressWithText';

function StatPair(props){

		const getColor = (value, colorIncrements) => {
			console.log('getting color for: ', value)
			console.log('increments: ', colorIncrements)
			console.log('colors: ', props.colors)
			if(value >= colorIncrements.great){
				return props.colors.great
			}

			if(value >= colorIncrements.good){
				return props.colors.good
			}

			if(value >= colorIncrements.average){
				return props.colors.average
			}

			if(value >= colorIncrements.poor){
				return props.colors.poor
			}

	        return props.colors.bad  
	    }

        let fill
        let enemyFill
        if(props.modifier){
            fill = props.modifier(props.myValue)
            enemyFill = props.modifier(props.enemyValue)
        }else{
            fill = props.myValue
            enemyFill = props.enemyValue
        }

        let myColor = getColor(props.myValue, props.colorIncrements)
        let enemyColor = getColor(props.enemyValue, props.colorIncrements)

        return(
            <div className="row" style={{margin:'0% 10%'}}>
                <CircularProgressWithText label={props.label} value={`${props.myValue}${props.percentage ? '%' : ''}`} size="10rem" variant="determinate" style={{color: myColor}} fill={fill} />
                <CircularProgressWithText size="5rem" variant="determinate" value={props.enemyValue} style={{color: enemyColor}} fill={enemyFill}/>
            </div>
        )
    }

export default function MatchStats(props){

	const [stats, setStats] = useState(null)
    // const [kp, setKp] = useState(0)
    // const [cpm, setCpm] = useState(0)
    // const [vs, setVs] = useState(0)
    // const [plates, setPlates] = useState(0)
    // const [roams, setRoams] = useState(0)
    const [newStatModalOpen, setOpen] = useState(false);

    console.log('MatchStats - stats: ', stats)

    const DEFAULT_GREAT_COLOR = '#50FA82'
    const DEFAULT_GOOD_COLOR = '#9AFAAD'
    const DEFAULT_AVERAGE_COLOR = '#4DC3FA'
    const DEFAULT_POOR_COLOR = '#FABA4D'
    const DEFAULT_BAD_COLOR = '#FA4D6B'

    const defaultColors = {
        great: DEFAULT_GREAT_COLOR,
        good: DEFAULT_GOOD_COLOR,
        average: DEFAULT_AVERAGE_COLOR,
        poor: DEFAULT_POOR_COLOR,
        bad: DEFAULT_BAD_COLOR
    }

    const handleNewStatModalOpen = () => {
        setOpen(true);
      };

    const handleNewStatModalClose = () => {
        setOpen(false);
    };

    const addNewStat = () => {
        setOpen(true)
    }

    const handleConfirmAdd = (newStat) => {
    	console.log('adding new stat: ', newStat)
    	stats.push(newStat)
    	setStats(stats)
        setOpen(false)
    }

    // const matchLoaded = () => {
    // 	setKp(82)
    //     //setKp(Math.floor(((props.match.kills + props.match.assists)/props.match.totalTeamKills)*100))
    //     setCpm(Math.floor((props.match.cs/props.match.duration.split(":")[0])))
    //     setVs(props.match.vs)
    //     setPlates(2)
    //     setRoams(1)
    // }

    const statPairs = [
    	{
    		label:'Kill Participation',
    		name: 'kp',
    		value: 82,
    		increments: {
    			great: 80,
    			good: 60,
    			average: 40,
    			poor: 20,
    			bad: 0,
    		},
    		colors: defaultColors,
    		modifier: null,
    		enemyValue: 100
    	},
    	{
    		label:'CS Per Minute',
    		name: 'cpm',
    		value: (Math.floor((props.match.cs/props.match.duration.split(":")[0]))),
    		increments: {
    			great: 8,
    			good: 6,
    			average: 4,
    			poor: 2,
    			bad: 0,
    		},
    		colors: defaultColors,
    		modifier: (val) => {return val * 10},
    		enemyValue: 9.5
    	},
    	{
    		label:'Vision Score',
    		name: 'vs',
    		value: props.match.vs,
    		increments: {
    			great: 40,
    			good: 30,
    			average: 20,
    			poor: 10,
    			bad: 0,
    		},
    		colors: defaultColors,
    		modifier: (val) => {return (val/40)*100},
    		enemyValue: 14
    	},
    	{
    		label:'Plates',
    		name: 'plates',
    		value: 2,
    		increments: {
    			great: 4,
    			good: 3,
    			average: 2,
    			poor: 1,
    			bad: 0,
    		},
    		colors: defaultColors,
    		modifier: (val) => {return val*25},
    		enemyValue: 5
    	},
    	{
    		label:'Roaming',
    		name: 'roams',
    		value: 1,
    		increments: {
    			great: 7,
    			good: 5,
    			average: 3,
    			poor: 1,
    			bad: 0,
    		},
    		colors: defaultColors,
    		modifier: (val) => {return val*14},
    		enemyValue: 5
    	},
    ]

    useEffect(() => {
    	if(props.match){
    		console.log('calling setStats')
    		setStats(statPairs)
    	}
    }, [props.match])

	return(
		<div className="row space-apart wrap">
			<NewStat open={newStatModalOpen} handleOpen={handleNewStatModalOpen} handleClose={handleNewStatModalClose} handleConfirmAdd={handleConfirmAdd} defaultColors={defaultColors}/>
			{stats ? stats.map((pair) => {
				return(
					<StatPair label={pair.label} myValue={pair.value} colors={pair.colors} colorIncrements={pair.increments} modifier={pair.modifier} enemyValue={pair.enemyValue}/>
				)
			})
			:
			null}
            <div style={{margin: '0% 17%', cursor:'pointer'}} onClick={addNewStat}>
            	<CircularProgressWithText size="10rem" variant="determinate" fill="100" value="+"/>
            </div>
		</div>
	)
}