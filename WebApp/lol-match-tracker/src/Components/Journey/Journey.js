import {React, Component} from 'react';
import './Journey.css';

import StartJourneyPage from './StartJourneyPage'
import JourneyLine from './JourneyLine'

class Journey extends Component{

  GRAPH_HEIGHT = 400;
  GRAPH_WIDTH = 1444;

  constructor(props){
    super(props)

    this.getData = this.getData.bind(this);
    this.normalize = this.normalize.bind(this);
    this.getGraphXValues = this.getGraphXValues.bind(this);
    this.getGraphYValues = this.getGraphYValues.bind(this);
    this.getPolylinePoints = this.getPolylinePoints.bind(this);
    this.userHasActiveJourney = this.userHasActiveJourney.bind(this);
  }

  userHasActiveJourney()
  {
    return false;
  }

  //TODO: Think about maybe doing some math such as:
  //Iron = 0
  //Bronze = 1000
  //Silver = 2000
  //etc
  //and division = 
  //1 = 400
  //2 = 300
  //3 = 200
  //4 = 100
  //and then we calculate Rank + Division + LP
  //So for example, Diamond 2 42 LP would be Diamond (5000) + 2 (300) + LP (42) = 5342
  //This can then be potentially mod'ed by 100 to get the position in the SVG viewbox?

  /*
  Data should be structured as:
  {
    maxRank:"Rank",
    maxLP:"LP:,"
    points: [
      {
        date:"MM/DD/YYYY",
        rank:"Rank",
        lp:"LP",
      },
      {

      },
      ...
    ] 
  }

  //This way max rank/lp is calculated server side and just sent to the client
  */
  // getDates(){
  //   let mockData = {
  //     dates:[
  //       {
  //         date:"1/1/2023"
  //       },
  //       {
  //         date:"1/7/2023"
  //       },
  //       {
  //         date:"1/24/2023"
  //       },
  //       {
  //         date:"2/13/2023"
  //       },
  //       {
  //         date:"2/28/2023"
  //       },
  //       {
  //         date:"3/4/2023"
  //       },
  //     ]
  //   }
  //   return mockData;
  // }

  getData(){
    return {
      champion:"Ekko",
      maxRank:"Diamond 3",
      maxLP:47,
      maxCalcRank:5444,
      minCalcRank:5100,
      startDate:"1/1/2023",
      totalLPGained: 344,
      totalGamesPlayed:32,
      points:[
        {
          date:"1/1/2023",
          rank:"Diamond 4",
          lp:0,
          calcRank:5100
        },
        {
          date:"1/7/2023",
          rank:"Diamond 4",
          lp:52,
          calcRank:5152
        },
        {
          date:"1/24/2023",
          rank:"Diamond 4",
          lp:75,
          calcRank:5175
        },
        {
          date:"2/13/2023",
          rank:"Diamond 3",
          lp:35,
          calcRank:5235
        },
        {
          date:"2/28/2023",
          rank:"Diamond 3",
          lp:21,
          calcRank:5221
        },
        {
          date:"3/1/2023",
          rank:"Diamond 1",
          LP:44,
          calcRank:5444
        },
        {
          date:"3/4/2023",
          rank:"Diamond 3",
          lp:47,
          calcRank:5247
        },
        {
          date:"3/17/2023",
          rank:"Diamond 4",
          lp:75,
          calcRank:5175
        },
      ]
    }
  }

  normalize(value, max, min){
    return (value - min) / (max - min)
  }

  getGraphXValues(data, spacing){
    let xValues = []

    for(let i = 0; i < data.points.length; i++){
      xValues.push((i + 1) * spacing)
    }

    return xValues;
  }

  getGraphYValues(data){
    let yValues = [] 

    for(const i in data.points){
      let normalized = this.normalize(data.points[i].calcRank, data.maxCalcRank, data.minCalcRank)
      yValues.push(this.GRAPH_HEIGHT - (normalized * this.GRAPH_HEIGHT))
    }

    return yValues;
  }

  getPolylinePoints(xValues, yValues){
    let points = []

    for(let i = 0; i < xValues.length; i++){
      points.push(xValues[i] + "," + yValues[i])
    }

    return points;
  }

  render(){   

    if(!this.userHasActiveJourney())
    {
      return <StartJourneyPage />
    }

    const journeyData = this.getData()

    const xSpacing = this.GRAPH_WIDTH/(journeyData.points.length + 1)
    const xValues = this.getGraphXValues(journeyData, xSpacing);
    const yValues = this.getGraphYValues(journeyData);
    
    const polylinePoints = this.getPolylinePoints(xValues, yValues);

    const dates = journeyData.points.map((id, index) => {
      return <p className="graph-date">{journeyData.points[index].date}</p>
    });

    //1444 = graph width 
    const circles = journeyData.points.map((id, index) => {
      return <circle cx={xValues[index]} cy={yValues[index]} r="5" fill="black"></circle>
    });

    return (
    <div className="journey column no-scrollbar">
        <div className="column journey-header-text">
          <h1 className="">Your <span className="blue-gradient-transition">{journeyData.champion}</span> Journey</h1>
          <svg className="journey-header-line">
            <line x1="0" y1="0" x2="1000" y2="0" stroke="black" stroke-width="10"></line>
          </svg>
        </div>
        <JourneyLine rotate={false} delay="0"></JourneyLine>
        <div className="full-width align-left">
          <div id="journey-step-1" className="journey-margin journey-step journey-step-left appears delayed-2">
            <h2 className="font-large">Journey Began On <span className="journey-data">{journeyData.startDate}</span></h2>
          </div>
        </div>
        <JourneyLine rotate={true} delay="4"></JourneyLine>
        <div className="journey-step-container align-right">
          <div  id="journey-step-2" className="journey-margin journey-step journey-step-right appears delayed-6">
            <h2 className="font-large">Since then, you have played <span className="journey-data">{journeyData.totalGamesPlayed}</span> games!</h2>
          </div>
        </div>
        <JourneyLine rotate={false} delay="6"></JourneyLine>
        <div className="journey-step-container align-left">
          <div id="journey-step-3" className="journey-margin journey-step journey-step-left appears delayed-6">
            <h2 className="font-large">and gained <span className="journey-data">{journeyData.totalLPGained}</span> LP!</h2>
          </div>
        </div>
        <div id="journey-section-lp-progress" className="journey-section column">
          <div className='underline'>
            <h2>LP Progress</h2>
          </div>
          <div className="graph-x-axis">
            <div id="graph" className="">
              <svg style={{width:"100%", height:"400px"}}>
                <polyline points={`${polylinePoints}`} fill="none" stroke="black" stroke-width="5"></polyline>
                {circles}
              </svg>
            </div>
            <div className="">
              <svg style={{width:"100%", height:"1vh"}}>
                <line x1="0" y1="0" x2="10000" y2="0" stroke="black" stroke-width="5"></line>
              </svg>
            </div>
            <div className="graph-date-line row start-left bold-text">
              {dates}
            </div>
          </div>
        </div>
    </div>
    );
  }

}

export default Journey;
