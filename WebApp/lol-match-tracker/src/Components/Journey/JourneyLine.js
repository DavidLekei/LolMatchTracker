import {React, Component} from 'react';
import './Journey.css';

class JourneyLine extends Component{

    constructor(props){
        super(props);
    }

  render(){

    return(
        <div className={`journey-line-section flex-center ${this.props.rotate? "rotated" : ""}`}>
          <svg className={`journey-line-section journey-line-animation-delay-${this.props.delay}`}>
            <path className="stroke-black" d="M 750 0 L 750 75 C 750 75 750 100 725 100 L 300 100 C 300 100 250 95 250 125 L 250 200 L 250 125 C 250 125 250 95 300 100 L 725 100 C 725 100 750 100 750 75 Z" fill="none" stroke-width="5"></path>
          </svg>
        </div>
    )
  }
}

export default JourneyLine;
