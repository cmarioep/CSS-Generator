import { useState } from "react";
import { Slider } from "@material-ui/core";
import './input_controls.css';

function InputControls() {

  const [value, setValue] = useState(0);

  const handlerSetValue = (event, val) => {
    setValue(val);
  }

  return (
    <div className="inputControls">
       <h1>CSS Box Shadow Generator</h1>
       <div className="control">
         X: <Slider min={-200} max={200} value={value} onChange={handlerSetValue}/>
         <input type="text" value={value}/>
        </div>
    </div>
  );
}

export default InputControls;