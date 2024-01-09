import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function NewStat(props) {

  const [colors, setColors] = useState(props.defaultColors)

  const [greatColor, setGreatColor] = useState(props.defaultColors.great)
  const [goodColor, setGoodColor] = useState(props.defaultColors.good)
  const [averageColor, setAverageColor] = useState(props.defaultColors.average)
  const [poorColor, setPoorColor] = useState(props.defaultColors.poor)
  const [badColor, setBadColor] = useState(props.defaultColors.bad)

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
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.handleConfirmAdd}>Add Stat</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}