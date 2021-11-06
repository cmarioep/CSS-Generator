import { useContext } from "react";
import { Slider } from "@material-ui/core";
import './SliderInput.css';

import {DataContext} from '../Context/DataContext';


function SliderInput(props) {

  const [value, setValue] = useContext(DataContext);

  const SetValueHandler = (event, val) => {
    setValue(val );
  }

  return (
    <div className="control">
        {props.label}: <Slider className="control__slider" min={-100} max={100} value={value} onChange={SetValueHandler}/>
        <input className="control__text" type="text" value={value}/>
    </div>
   );
}

export default SliderInput;