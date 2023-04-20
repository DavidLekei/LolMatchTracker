import React, {Component} from 'react';



class StatsOverview extends Component{

    constructor(props){
        super(props);
    
        this.getMostPlayedChampion = this.getMostPlayedChampion.bind(this);
    }

    getMostPlayedChampion(){
        let mockData = {
            championName: "Ahri",
            numberOfGames: 22,
            winPercentage: 63,
        }

        return mockData;
    }

    render(){

        let mostPlayedChampionInfo = this.getMostPlayedChampion();

        return(
            <div id="home-stats-container" className="home-stats-container">
                <div id="home-stats-most-played-info" className="most-played-info">
                    <img src={`/game/champion/${mostPlayedChampionInfo.championName}.png`}></img>
                    <div className="info-text">
                        <p>Games Played: {mostPlayedChampionInfo.numberOfGames}</p>
                        <p>Win Rate: {mostPlayedChampionInfo.winPercentage}%</p>
                    </div>
                </div>
                <p>K/D/A in last X games:</p>
                <p>Recent Win/Loss Percentage</p>
                <p>Recent Rank/LP Increase</p>
            </div>
        )
    }
}

export default StatsOverview;