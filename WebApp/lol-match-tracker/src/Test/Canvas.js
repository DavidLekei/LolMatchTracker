import {React, Component} from 'react';
import './Canvas.css';

import SecondaryRuneOptions from '../Components/Match/NewMatch/SecondaryRuneOptions'

class Canvas extends Component{

  render(){
    return(
      <div className="canvas column">
        <SecondaryRuneOptions category="Precision"/>
      </div>
    )
  }
}

export default Canvas;
