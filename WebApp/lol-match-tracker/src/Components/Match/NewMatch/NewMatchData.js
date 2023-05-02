import {React} from 'react';

export default function NewMatchData(props){
    return(
        <div className="match-data-entry">
            <div className="align-column-start">
                <h3>{props.label}</h3>
                {props.component}
            </div>
        </div>
    )
}