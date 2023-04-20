import {React, Component} from 'react';
import './Journey.css';

class JourneyBorderBox extends Component{

  render(){
    return(
      <div className="journey-margin journey-animated-border align-left">
        <svg className="border-path ">
          <path d="M 0 0 H 800 L 800 154 L 0 154 L 0 0 Z" fill="none" stroke="black" stroke-width="5"></path>
          <text x="200" y="75" font-size="24">You Started Your Journey On {journeyData.startDate}</text>
        </svg>
      </div>
    )
  }
}

export default JourneyBorderBox;
