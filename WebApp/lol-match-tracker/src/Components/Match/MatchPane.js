import React, {useState} from 'react';

import { useParams } from "react-router-dom";

import './MatchPane.css'

import MatchesPaneHeader from './MatchesPaneHeader'
import MatchesListview from './MatchesListview'
import MatchListviewFilterModal from './MatchListviewFilterModal'


// const filters = {
//     champions:["Viktor"],
//     start_date:null,
//     end_date:null,
//     outcome:null,
// }

let filterSettings = {
    champions: [],
    start_date:null,
    end_date:null,
    outcome:null
}

//currentColumns: Array that contains the names (as Strings) of the currently visible columns on the listview
//filterRules: JSON Object where Key = column name and Value = How to filter
/*Ex: filterRules = {
    "champion":"Viktor",
    "outcome":"loss"
}*/
function showFilterModal(){
    let modal = document.getElementById("filter-modal");
    modal.style.display = "block";

    let pane = document.getElementById("display-pane");
    let lv = document.getElementById("match-lv-container");
    let header = document.getElementById("match-header");

    let oldLVClass = lv.className;
    let oldHeaderClass = header.className;

    //TODO: There has to be a better way to add and remove class names from an element lol
    lv.className += " blurred";
    header.className += " blurred";

    pane.onclick = () => {
        modal.style.display = "none";
        lv.className = oldLVClass;
        header.className = oldHeaderClass;
    }

    //Since the Modal is contained within the match-pane, when the Modal is clicked, we don't want to propagate that event up the chain and cause the Modal to close itself.
    modal.onclick = (event) => {
        if(event.target.id != "match-filter-apply-btn" 
        && event.target.id != "modal-exit-btn"
        ){
            console.log(event.target)
            event.stopPropagation();
        }
    }
}

function getFilterChampions(){
    let champSelect = document.getElementById("match-filter-champ-select");
    return [champSelect.value]
}

function getFilterStartDate(){
    let startDate = document.getElementById("match-filter-start-date").value;
    return startDate
}

function getFilterEndDate(){
    let endDate = document.getElementById("match-filter-end-date").value;
    return endDate
}

function getFilterOutcome(){
    return "win"
}


function getFilterSettings(){
    return {
        champions: getFilterChampions(),
        start_date:getFilterStartDate(),
        end_date:getFilterEndDate(),
        outcome:getFilterOutcome()
    }
}

//TODO: Match data should be retrieved from here I think... lol even tho we moved it out of here orginally xD
export default function MatchPane(){

    let {matchid} = useParams();
  
    const [filters, setFilter] = useState(filterSettings);

    if(typeof matchid === 'undefined'){
        return(
            <div id="match-pane" className="match-pane">
                    <MatchListviewFilterModal id="filter-modal" header="Filter Matches" apply_onclick={() => setFilter(getFilterSettings())}></MatchListviewFilterModal>
                    <MatchesPaneHeader header="MATCHES" text="View All Of Your Matches" filter_icon="filter_white" filter_function={showFilterModal}/>
                    <MatchesListview filters={filters}/>
            </div>
        )
    }else{
        return(
            <div className="App-content-home">
                        <MatchesListview />
            </div>
        )
    }
}

