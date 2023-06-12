import React, {Component} from 'react';

import {Button} from '@mui/material'

import DropdownMenu from '../Common/DropdownMenu'
import DateInput from '../Common/DateInput'
import ModalHeader from '../Common/Modal/ModalHeader'
import ChampionSelectField from '../Game/Champions/ChampionSelectField'

class MatchListviewFilterModal extends Component{
    constructor(props){
        super(props);

        this.championFilter = []
    }

    //TODO: Generate the components based on the COLUMNS passed into this component
    render(){
        return(
            <div id={this.props.id} className={`match-filter-modal`}>
                <ModalHeader text="Filter Matches" exit_onclick=""></ModalHeader>
                <ChampionSelectField id="match-filter-champ-select" label="Champion" button={true}></ChampionSelectField>
                {/* <DropdownMenu id="match-filter-champ-select" label="Champion Played"></DropdownMenu> */}
                <DropdownMenu id="match-filter-champ-against-select" label="Against"></DropdownMenu>
                <DateInput id="match-filter-start-date" label="Start Date"></DateInput>
                <DateInput id="match-filter-end-date" label="End Date"></DateInput>
                <Button id="match-filter-apply-btn" variant="contained" onClick={this.props.apply_onclick}>Apply</Button>
            </div>
        )
    }
}

export default MatchListviewFilterModal;