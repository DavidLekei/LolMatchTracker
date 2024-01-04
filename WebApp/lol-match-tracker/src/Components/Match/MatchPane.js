import React, {useState, useEffect, useRef} from 'react';

import { useParams } from "react-router-dom";

import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


//TODO: Figure out how to properly use setTimeout() to display an error/warning if the users data does not get returned from the server in X seconds
export default function MatchPane(props){

    const [matchData, setMatchData] = useState(null);
    const [filteredChampion, setFilteredChampion] = useState(null);

    const championsPlayed = new Set()

    const ChampionMultipleSelect = (props) => {

      const handleChange = (event) => {
        setFilteredChampion(event.target.value)
      };

      const menuItems = []
      menuItems.push(
        <MenuItem key=" " value={null}>
            <ListItemText primary="(None)" />
        </MenuItem>
      )

      props.champions.forEach((name) => {
                menuItems.push(
                    <MenuItem key={name} value={name}>
                      <ListItemText primary={name} />
                    </MenuItem>
                )
            })

      return (
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="champion-multiple-checkbox-label">Champions</InputLabel>
            <Select
              labelId="champion-multiple-checkbox-label"
              id="champion-multiple-checkbox"
              value={filteredChampion}
              onChange={handleChange}
              input={<OutlinedInput label="Champions" />}
              MenuProps={MenuProps}
            >
                {menuItems}
            </Select>
          </FormControl>
        </div>
      );
    }

    //TODO: This should probably call a "getBasicMatchData" type of endpoint, that only gets data for the columns required, instead of ALL data, but that's an optimization we can make in the future
    useEffect(
        () => {
                async function getMatchData(){
                    await fetch("http://localhost:8080/matches/user/1").then((res) => {
                        if(res.ok)
                        {
                            res.json().then((data) => {
                                setMatchData(data);
                            });
                        }
                    })
                }
            getMatchData();   
            }, []
    );

    if(!matchData){
        return(
            <h1>Loading</h1>
        )
    }

    else{

        console.log('match data: ', matchData)

        matchData.forEach((match) => {
            championsPlayed.add(match.championPlayed.name)
        })

        const matches = matchData.map((match) => {
            console.log('checking if championsPlayed: ', filteredChampion)
            console.log('has match.championPlayed.name: ', match.championPlayed.name)
            if(filteredChampion == null){
                return <MatchInfoSmall data={match} />
            }

            if(filteredChampion == match.championPlayed.name){
                return <MatchInfoSmall data={match} />
            }
        })

        return(
            <div id="match-pane" className="match-pane">
                <div className="column la space-apart">
                    <h1>Matches</h1>
                    <ChampionMultipleSelect champions={championsPlayed}/>
                </div>
                {matches}
            </div>
            )
    }
}

