import {useState, useEffect} from 'react'
import NewStat from './NewStat'

import CircularProgressWithText from '../Common/CircularProgressWithText';

function StatPair(props){
		console.log('statpair props: ', props)

		const getColor = (value, colorIncrements) => {
	        if(value <= colorIncrements.poor){
	            return props.colors.bad
	        }

	        if(value <= colorIncrements.average){
	            return props.colors.poor
	        }

	        if(value <= colorIncrements.good){
	            return props.colors.average
	        }

	        if(value <= colorIncrements.great){
	            return props.colors.good
	        }
	        
	        return props.colors.great   
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

    const [kp, setKp] = useState(0)
    const [cpm, setCpm] = useState(0)
    const [vs, setVs] = useState(0)
    const [plates, setPlates] = useState(0)
    const [roams, setRoams] = useState(0)
    const [newStatModalOpen, setOpen] = useState(false);

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

    const handleConfirmAdd = () => {
        setOpen(false)
    }

    const matchLoaded = () => {
    	setKp(82)
        //setKp(Math.floor(((props.match.kills + props.match.assists)/props.match.totalTeamKills)*100))
        setCpm(Math.floor((props.match.cs/props.match.duration.split(":")[0])))
        setVs(props.match.vs)
        setPlates(2)
        setRoams(1)
    }

    const statPairs = [
    	{
    		label:'Kill Participation',
    		name: 'kp',
    		value: kp,
    		increments: {
    			great: 80,
    			good: 60,
    			average: 40,
    			poor: 20,
    		},
    		colors: defaultColors,
    		modifier: null,
    	},
    	{
    		label:'CS Per Minute',
    		name: 'cpm',
    		value: cpm,
    		increments: {
    			great: 8,
    			good: 6,
    			average: 4,
    			poor: 2,
    		},
    		colors: defaultColors,
    		modifier: (val) => {return val * 10}
    	},
    	{
    		label:'Vision Score',
    		name: 'vs',
    		value: vs,
    		increments: {
    			great: 40,
    			good: 30,
    			average: 20,
    			poor: 10,
    		},
    		colors: defaultColors,
    		modifier: (val) => {return (val/40)*100}
    	},
    	{
    		label:'Plates',
    		name: 'plates',
    		value: plates,
    		increments: {
    			great: 4,
    			good: 3,
    			average: 2,
    			poor: 1,
    		},
    		colors: defaultColors,
    		modifier: (val) => {return val*25}
    	},
    	{
    		label:'Roaming',
    		name: 'roams',
    		value: roams,
    		increments: {
    			great: 7,
    			good: 5,
    			average: 3,
    			poor: 1,
    		},
    		colors: defaultColors,
    		modifier: (val) => {return val*14}
    	},
    ]

    useEffect(() => {
    	if(props.match){
    		matchLoaded()
    	}
    }, [props.match])

	return(
		<div className="row space-apart wrap">
			<NewStat open={newStatModalOpen} handleOpen={handleNewStatModalOpen} handleClose={handleNewStatModalClose} handleConfirmAdd={handleConfirmAdd} defaultColors={defaultColors}/>
			{statPairs.map((pair) => {
				return(
					<StatPair label={pair.label} myValue={pair.value} colors={pair.colors} colorIncrements={pair.increments} modifier={pair.modifier} />
				)
			})}
{/*			<StatPair label="Kill Participation" myValue={`${kp}`} percentage myColor={kpColor} enemyValue='100' enemyColor={enemyKpColor}/>
            <StatPair label="CS Per Minute" myValue={`${cpm}`} modifier={(val) => {return val * 10}} myColor={cpmColor} enemyValue='8.2' enemyColor={enemyCpmColor} />
            <StatPair label="Vision Score" myValue={`${vs}`} modifier={(val) => {return (val/40)*100}} myColor={vsColor} enemyValue='41' enemyColor={enemyVsColor} />
            <StatPair label="Plates" myValue={`${plates}`} modifier={(val) => {return val*25}} myColor={platesColor} enemyValue='5' enemyColor={enemyPlatesColor} />
            <StatPair label="Roaming" myValue={`${roams}`} modifier={(val) => {return val*14}} myColor='#FA8389' enemyValue='3' enemyColor={enemyRoamsColor} />*/}
            <div style={{margin: '0% 17%', cursor:'pointer'}} onClick={addNewStat}>
            	<CircularProgressWithText size="10rem" variant="determinate" fill="100" value="+"/>
            </div>
		</div>
	)
}