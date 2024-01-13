import {useState, useEffect} from 'react'
import NewStat from './NewStat'

import CircularProgressWithText from '../Common/CircularProgressWithText';

function Stat(props){
		console.log('stat props: ', props)
		const getColor = (value, colorIncrements) => {

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
        if(props.modifier){
            fill = props.modifier(props.value)
        }else{
            fill = props.value
        }

        let color = getColor(props.value, props.colorIncrements)

        return(
            <div className="row" >
                <CircularProgressWithText label={props.enemy ? null : props.label} value={`${props.value}${props.percentage ? '%' : ''}`} size={`${props.enemy ? '5rem' : '10rem'}`} variant="determinate" style={{color: color}} fill={fill} />
            </div>
        )
    }

export default function MatchStats(props){

	const [stats, setStats] = useState(null)
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

    const handleConfirmAdd = (newStat) => {
    	console.log('adding new stat: ', newStat)
    	stats.push(newStat)
    	setStats(stats)
        setOpen(false)
    }

    const statPairs = [
    	{
    		label:'Kill Participation',
    		me: {
	    		value: 82,
	    		increments: {
	    			great: 80,
	    			good: 60,
	    			average: 40,
	    			poor: 20,
	    			bad: 0,
	    		},
	    		colors: defaultColors,
	    	},
	    	enemy: {
	    		value: 100,
	    		increments: {
	    			great: 80,
	    			good: 60,
	    			average: 40,
	    			poor: 20,
	    			bad: 0,
	    		},
	    		colors: defaultColors,
	    	},
    		modifier: null,
    	},
    	{
    		label:'CS Per Minute',
    		me: {
	    		value: (Math.floor((props.match.cs/props.match.duration.split(":")[0]))),
	    		increments: {
	    			great: 8,
	    			good: 6,
	    			average: 4,
	    			poor: 2,
	    			bad: 0,
	    		},
	    		colors: defaultColors
	    	},
	    	enemy: {
	    		value: 9.5,
	    		increments: {
	    			great: 8,
	    			good: 6,
	    			average: 4,
	    			poor: 2,
	    			bad: 0,
	    		},
	    		colors: defaultColors,
		    },
    		modifier: (val) => {return val * 10},
    	},
    	{
    		label:'Vision Score',
    		me:{
	    		value: props.match.vs,
	    		increments: {
	    			great: 40,
	    			good: 30,
	    			average: 20,
	    			poor: 10,
	    			bad: 0,
	    		},
	    		colors: defaultColors,
	    	},
	    	enemy: {
	    		value: 14,
	    		increments: {
	    			great: 40,
	    			good: 30,
	    			average: 20,
	    			poor: 10,
	    			bad: 0,
	    		},
	    		colors: defaultColors,
	    	},
    		modifier: (val) => {return (val/40)*100},
    	},
    	{
    		label:'Plates',
    		me:{
	    		value: 2,
	    		increments: {
	    			great: 4,
	    			good: 3,
	    			average: 2,
	    			poor: 1,
	    			bad: 0,
	    		},
	    		colors: defaultColors,
	    	},
	    	enemy: {
	    		value: 5,
	    		increments: {
	    			great: 4,
	    			good: 3,
	    			average: 2,
	    			poor: 1,
	    			bad: 0,
	    		},
	    		colors: defaultColors,
	    	},
    		modifier: (val) => {return val*25},
    	},
    	{
    		label:'Roaming',
    		me: {
	    		value: 1,
	    		increments: {
	    			great: 7,
	    			good: 5,
	    			average: 3,
	    			poor: 1,
	    			bad: 0,
	    		},
	    		colors: defaultColors,
	    	},
	    	enemy: {
	    		value: 5,
	    		increments: {
	    			great: 7,
	    			good: 5,
	    			average: 3,
	    			poor: 1,
	    			bad: 0,
	    		},
	    		colors: defaultColors,
	    	},
    		modifier: (val) => {return val*14},
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
			{stats ? stats.map((stat) => {
				return(
					<div className="row" style={{margin:'0% 10%'}}>
						<Stat label={stat.label} value={stat.me.value} colors={stat.me.colors} colorIncrements={stat.me.increments} modifier={stat.me.modifier} />
						<Stat enemy label={stat.label} value={stat.me.value} colors={stat.me.colors} colorIncrements={stat.me.increments} modifier={stat.me.modifier} />
					</div>
				)
			})
			:
			null}
            <div style={{margin: '0% 10%', cursor:'pointer'}} onClick={addNewStat}>
            	<CircularProgressWithText size="10rem" variant="determinate" fill="100" value="+"/>
            </div>
		</div>
	)
}