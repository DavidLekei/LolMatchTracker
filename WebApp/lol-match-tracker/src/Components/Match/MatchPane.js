import React, {useState} from 'react';

import { useParams } from "react-router-dom";

import './MatchPane.css'

import MatchesPaneHeader from './MatchesPaneHeader'
import MatchListviewFilterModal from './MatchListviewFilterModal'
import Listview from '../Common/Listview/Listview'
import MatchInfoSmall from './MatchInfoSmall';
import MatchInfoFull from './MatchInfoFull'


function getMatchData(){
    let mockData ={games: [
        {
            matchid:1,
            date_played:"2023-03-12",
            duration:"30:00",
            champion:"Viktor",
            champion_against:"Sylas",
            outcome:"loss",
            kills:4,
            deaths:7,
            assists:10
        },
        {
            matchid:2,
            date_played:"2023-03-03",
            duration:"33:28",
            champion:"Taliyah",
            champion_against:"Ziggs",
            outcome:"win",
            kills:12,
            deaths:4,
            assists:16
        },
        {
            matchid:3,
            date_played:"2023-02-27",
            duration:"27:23",
            champion:"Ahri",
            champion_against:"Zed",
            outcome:"win",
            kills:8,
            deaths:1,
            assists:8
        },
        {
            matchid:3,
            date_played:"2023-02-27",
            duration:"27:23",
            champion:"Ahri",
            champion_against:"Zed",
            outcome:"win",
            kills:8,
            deaths:1,
            assists:8
        }
    ]}

    return mockData;
}

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
    let matchData = getMatchData();

    let columns = [
        "Date Played",
        "Champion",
        "Against",
        "K/D/A",
        "Outcome"
    ]
 
    const [filters, setFilter] = useState(filterSettings);

    const listviewData = matchData.games.map((id, index) => {
        return <MatchInfoSmall columns={columns} data={matchData.games[index]} filters={filters} />
    })

    if(typeof matchid === 'undefined'){
        return(
            <div id="match-pane" className="match-pane">
                    <MatchListviewFilterModal id="filter-modal" header="Filter Matches" apply_onclick={() => setFilter(getFilterSettings())}></MatchListviewFilterModal>
                    <MatchesPaneHeader header="MATCHES" text="View All Of Your Matches" filter_icon="filter_white" filter_function={showFilterModal}/>
                    <Listview id="match" columns={columns}>
                        {listviewData}
                    </Listview>
            </div>
        )
    }else{
        return(
            <div className="App-content-home">
                        <MatchInfoFull matchid={matchid} data={matchData.games[matchid - 1]}/>
            </div>
        )
    }
}

