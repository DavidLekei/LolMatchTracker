import React, {Component} from 'react';

class ChampMatchup extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={`champ-matchup`}>
                <img src={`/game/champion/${this.props.champion}.png`} />
                <h1>VS</h1>
                <img src={`/game/champion/${this.props.champion_against}.png`} />
            </div>
        )
    }
}

export default ChampMatchup;