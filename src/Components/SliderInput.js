import { useState } from "react";
import { Slider } from "@material-ui/core";
import './SliderInput.css';


function SliderInput(props) {

  const [value, setValue] = useState(0);

  const SetValueHandler = (event, val) => {
    setValue(val);
  }

  return (
    <div className="control">
        {props.label}: <Slider className="control__slider" min={-100} max={100} value={value} onChange={SetValueHandler}/>
        <input className="control__text" type="text" value={value}/>
    </div>
   );
}

export default SliderInput;