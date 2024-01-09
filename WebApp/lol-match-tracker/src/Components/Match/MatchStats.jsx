import {useState, useEffect} from 'react'
import NewStat from './NewStat'

import CircularProgressWithText from '../Common/CircularProgressWithText';

function StatPair(props){
		console.log('stat pair props: ', props)
        let fill
        let enemyFill
        if(props.modifier){
            fill = props.modifier(props.myValue)
            enemyFill = props.modifier(props.enemyValue)
        }else{
            fill = props.myValue
            enemyFill = props.enemyValue
        }
        return(
            <div className="row" style={{margin:'0% 10%'}}>
                <CircularProgressWithText label={props.label} value={`${props.myValue}${props.percentage ? '%' : ''}`} size="10rem" variant="determinate" style={{color: props.myColor}} fill={fill} />
                <CircularProgressWithText size="5rem" variant="determinate" value={props.enemyValue} style={{color: props.enemyColor}} fill={enemyFill}/>
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

    const getColor = (value, poor, okay, good, great) => {
        if(value <= poor){
            return '#FA4D6B'
        }

        if(value <= okay){
            return '#FABA4D'
        }

        if(value <= good){
            return '#4DC3FA'
        }

        if(value <= great){
            return '#9AFAAD'
        }
        
        return '#50FA82'    
    }

    const kpColor = getColor(kp, 20, 40, 60, 80)
    const enemyKpColor = getColor(100, 20, 40, 60, 80)
    const cpmColor = getColor(cpm, 2, 4, 6, 8)
    const enemyCpmColor = getColor(8.2, 2, 4, 6, 8)
    const vsColor = getColor(props.match.vs, 10, 20, 30, 40)
    const enemyVsColor = getColor(41, 10, 20, 30, 40)
    const platesColor = getColor(plates, 1, 2, 3, 4)
    const enemyPlatesColor = getColor(5, 1, 2, 3, 4)
    const roamsColor = getColor(roams, 1, 3, 5, 7)
    const enemyRoamsColor = getColor(3, 1, 3, 5, 7)

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
    		value: {kp},
    		colors: {defaultColors},
    		modifier: null,
    	},
    	{
    		label:'CS Per Minute',
    		name: 'cpm',
    		value: {cpm},
    		colors: {defaultColors},
    		modifier: (val) => {return val * 10}
    	},
    	{
    		label:'Vision Score',
    		name: 'vs',
    		value: {vs},
    		colors: {defaultColors},
    		modifier: (val) => {return (val/40)*100}
    	},
    	{
    		label:'Plates',
    		name: 'plates',
    		value: {plates},
    		colors: {defaultColors},
    		modifier: (val) => {return val*25}
    	},
    	{
    		label:'Roaming',
    		name: 'roams',
    		value: {roams},
    		colors: {defaultColors},
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
			<StatPair label="Kill Participation" myValue={`${kp}`} percentage myColor={kpColor} enemyValue='100' enemyColor={enemyKpColor}/>
            <StatPair label="CS Per Minute" myValue={`${cpm}`} modifier={(val) => {return val * 10}} myColor={cpmColor} enemyValue='8.2' enemyColor={enemyCpmColor} />
            <StatPair label="Vision Score" myValue={`${vs}`} modifier={(val) => {return (val/40)*100}} myColor={vsColor} enemyValue='41' enemyColor={enemyVsColor} />
            <StatPair label="Plates" myValue={`${plates}`} modifier={(val) => {return val*25}} myColor={platesColor} enemyValue='5' enemyColor={enemyPlatesColor} />
            <StatPair label="Roaming" myValue={`${roams}`} modifier={(val) => {return val*14}} myColor='#FA8389' enemyValue='3' enemyColor={enemyRoamsColor} />
            <div style={{margin: '0% 17%', cursor:'pointer'}} onClick={addNewStat}>
            	<CircularProgressWithText size="10rem" variant="determinate" fill="100" value="+"/>
            </div>
		</div>
	)
}