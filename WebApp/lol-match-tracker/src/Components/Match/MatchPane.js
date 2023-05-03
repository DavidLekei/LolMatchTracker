import React, {useState, useEffect} from 'react';

import { useParams } from "react-router-dom";

import './MatchPane.css'

import MatchesPaneHeader from './MatchesPaneHeader'
import MatchListviewFilterModal from './MatchListviewFilterModal'
import Listview from '../Common/Listview/Listview'
import MatchInfoSmall from './MatchInfoSmall';

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

    let columns = [
        "Champion",
        "Against",
        "Outcome",
        "Date Played",
        "K/D/A",
    ]
 
    const [filters, setFilter] = useState(filterSettings);
    const [isLoading, setIsLoading] = useState(true);
    const [matchData, setMatchData] = useState({games: []});


    //TODO: This should probably call a "getBasicMatchData" type of endpoint, that only gets data for the columns required, instead of ALL data, but that's an optimization we can make in the future
    useEffect(
        () => {
                async function getMatchData(){
                    await fetch("http://localhost:8080/matches/user/1").then((res) => {
                        if(res.ok)
                        {
                            res.json().then((data) => {
                                setMatchData(data);
                                setIsLoading(false);
                            });
                        }
                    })
                }
            getMatchData();   
            }, []
    );

    //If data cannot be retrieved from the server after 5 seconds, render the page with no match data
    setTimeout(() => {
        setMatchData([])
        setIsLoading(false);
    }, 5000)

    if(isLoading)
    {
        return(
            <h1>Loading</h1>
        )
    }
    else{
        return(
            <div id="match-pane" className="match-pane">
                    <MatchListviewFilterModal id="filter-modal" header="Filter Matches" apply_onclick={() => setFilter(getFilterSettings())}></MatchListviewFilterModal>
                    <MatchesPaneHeader header="MATCHES" text="View All Of Your Matches" filter_icon="filter_white" filter_function={showFilterModal}/>
                    <Listview id="match" columns={columns}>
                        {
                            //TODO: Filter should probably be applied HERE somehow, not in the MatchInfoSmall class
                            //TODO: Or implement a common filter in the Listview.js file
                            matchData.map((item) => {
                                return <MatchInfoSmall columns={columns} data={item} filters={filters}/>
                            })
                        }
                    </Listview>
            </div>
            )
    }
}

