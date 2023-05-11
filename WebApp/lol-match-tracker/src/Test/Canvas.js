import {React, Component} from 'react';
import './Canvas.css';

import ItemSelectField from '../Components/Game/Champions/Items/ItemSelectField';

class Canvas extends Component{

  render(){
    return(
      <div className="canvas column">
          <ItemSelectField label="Select Item"/>
      </div>
    )
  }
}

export default Canvas;
