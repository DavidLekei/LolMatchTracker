import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';

export default function NewStat(props) {

  const [includeEnemy, setIncludeEnemy] = useState(false)
  const [colors, setColors] = useState(props.defaultColors)

  const [greatColor, setGreatColor] = useState(props.defaultColors.great)
  const [goodColor, setGoodColor] = useState(props.defaultColors.good)
  const [averageColor, setAverageColor] = useState(props.defaultColors.average)
  const [poorColor, setPoorColor] = useState(props.defaultColors.poor)
  const [badColor, setBadColor] = useState(props.defaultColors.bad)
  const [enemyColor, setEnemyColor] = useState()

  const handleAdd = (e) => {
    const newStatLabel = document.getElementById('new-stat-name').value
    const newStatGreat = document.getElementById('new-stat-great').value
    const newStatGood = document.getElementById('new-stat-good').value
    const newStatAverage = document.getElementById('new-stat-average').value
    const newStatPoor = document.getElementById('new-stat-poor').value
    const newStatBad = document.getElementById('new-stat-bad').value

      return {
        label:newStatLabel,
        value: document.getElementById('new-stat-value').value,
        increments: {
          great: newStatGreat,
          good: newStatGood,
          average: newStatAverage,
          poor: newStatPoor,
          bad: newStatBad
        },
        colors: {
          great: greatColor,
          good: goodColor,
          average: averageColor,
          poor: poorColor,
          bad: badColor,
        },
        modifier: (val) => {
          let x = Math.floor(100/newStatGreat)
          return val*x
        }
      }
  }


  const EnemyStatDialog = () => {
    return(
      <div className="column sa space-evenly">
              <div className="row space-evenly">
                <TextField
                  sx={{width:'50%'}}
                  margin="dense"
                  id="enemy-stat-value"
                  label="Enemy value for this game"
                />
              </div>
              <div className="row ca space-evenly">
                <h4>Enemy Color</h4>
                <input type="color" value={badColor} onChange={(e) => {setEnemyColor(e.target.value)}}/>
              </div>
        </div>
      )
  }

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Add New Stat</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To track a custom statistic, enter the name of the stat and the five values that would correspond to a great, good, average, poor, or bad rating.
          </DialogContentText>
          <div className="column sa space-evenly">
            <div className="row space-evenly">
              <TextField
                sx={{width:'50%'}}
                margin="dense"
                id="new-stat-name"
                label="Name"
              />
            </div>
            <div className="row space-evenly">
              <TextField
                sx={{width:'50%'}}
                margin="dense"
                id="new-stat-value"
                label="Value for this game"
              />
            </div>
            <div className="row ca space-evenly">
              <TextField
                sx={{width:'20%'}}
                margin="dense"
                id="new-stat-great"
                label="Great"
                type="number"
              />
              <input type="color" value={greatColor} onChange={(e) => {setGreatColor(e.target.value)}}/>
            </div>
            <div className="row ca space-evenly">
              <TextField
                sx={{width:'20%'}}
                margin="dense"
                id="new-stat-good"
                label="Good"
                type="number"
              />
              <input type="color" value={goodColor} onChange={(e) => {setGoodColor(e.target.value)}}/>
            </div>
            <div className="row ca space-evenly">
              <TextField
                sx={{width:'20%'}}
                margin="dense"
                id="new-stat-average"
                label="Average"
                type="number"
              />
              <input type="color" value={averageColor} onChange={(e) => {setAverageColor(e.target.value)}}/>
            </div>
            <div className="row ca space-evenly">
              <TextField
                sx={{width:'20%'}}
                margin="dense"
                id="new-stat-poor"
                label="Poor"
                type="number"
              />
              <input type="color" value={poorColor} onChange={(e) => {setPoorColor(e.target.value)}}/>
            </div>
            <div className="row ca space-evenly">
              <TextField
                sx={{width:'20%'}}
                margin="dense"
                id="new-stat-bad"
                label="Bad"
                type="number"
              />
              <input type="color" value={badColor} onChange={(e) => {setBadColor(e.target.value)}}/>
            </div>
          </div>
          <div className="row ca space-evenly">
              <h4>Include enemy?</h4>
              <Checkbox onChange={(e) => {setIncludeEnemy(!includeEnemy)}}/>
          </div>
          {includeEnemy ? <EnemyStatDialog /> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button 
            onClick={
              (e) => {
                props.handleConfirmAdd(handleAdd(e))
              }
            }
          >
              Add Stat
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}