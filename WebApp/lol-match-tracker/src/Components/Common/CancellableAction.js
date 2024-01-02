import Button from '@mui/material/Button'
import { Divider } from '@mui/material'

export default function CancellableAction(props){

    const handleCancel = () => {
        props.onCancel()
    }

    const handleConfirm = () => {
        props.onConfirm()
    }

    return(
        <div className="container">
            <div className="inner-container">
                {props.children}
                <hr style={{color:'black'}}/>
                <div className="fw row space-between bt-thin">
                    <Button variant="contained" color="error" onClick={handleCancel}>Cancel</Button>
                    <Button variant="contained" onClick={handleConfirm}>Confirm</Button>
                </div>
            </div>
        </div>
    )
}