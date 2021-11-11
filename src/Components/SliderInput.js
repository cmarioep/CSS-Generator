import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Slider } from "@material-ui/core";
import './SliderInput.css';
import { yellow } from "@material-ui/core/colors";


function SliderInput(props) {

  const dispatch = useDispatch();
  const valor = useSelector(state => state.x);
  

  const setXHandler = () => {
    dispatch({type: 'setX'})
  };

  return (
    <div className="control">
        <span className="control__label">{props.label}:</span> 
        <Slider className="control__slider" min={-100} max={100}  value={valor} onChange={setXHandler}/>
        <input className="control__text" type="text" value={valor}/>
    </div>
   );
}

export default SliderInput;