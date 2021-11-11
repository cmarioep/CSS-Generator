import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setPropertiesActions} from '../store/index';

import { Slider } from "@material-ui/core";

import './SliderInput.css';



function SliderInput(props) {

  
  const dispatch = useDispatch();
  const counter = useSelector(state => state.x);
  
  const [localState, setLocalState] = useState(counter);

  const setXHandler = (event, val) => {
    setLocalState(val);
    dispatch(setPropertiesActions.setX(localState));

  };


  return (
    <div className="control">
        <span className="control__label">{props.label}:</span> 
        <Slider className="control__slider" min={-100} max={100}  value={counter} onChange={setXHandler}/>
        <input className="control__text" type="text" value={counter}/>
    </div>
   );
}

export default SliderInput;