import {React, Component} from 'react';
import './Canvas.css';

import Journey from '../Components/Journey/Journey'

class Canvas extends Component{

  render(){
    return(
      <div className="canvas column">
        <Journey></Journey>
      </div>
    )
  }
}

export default Canvas;
