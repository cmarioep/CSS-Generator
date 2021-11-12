import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setPropertiesActions} from '../store/index';

import { Slider } from "@material-ui/core";

import './SliderInput.css';



function SliderInput(props) {

  
  const dispatch = useDispatch();

  const x = useSelector(state => state.x);
  const y = useSelector(state => state.y);
  const blur = useSelector(state => state.blur);
  const spread = useSelector(state => state.spread);
  let conditionalValue = 0;
  
  const [localState, setLocalState] = useState();

  const setXHandler = (event, val) => {
    setLocalState(val);
    dispatch(setPropertiesActions.setX(localState));

  };

  const setYHandler = (event, val) => {
    setLocalState(val);
    dispatch(setPropertiesActions.setY(localState));

  };

  const setBlurHandler = (event, val) => {
    setLocalState(val);
    dispatch(setPropertiesActions.setBlur(localState));

  };

  const setSpreadHandler = (event, val) => {
    setLocalState(val);
    dispatch(setPropertiesActions.setSpread(localState));

  };


  const setValue = () => {

    if (props.label === 'x') {
      conditionalValue = x;
    }

    if (props.label === 'y') {
      conditionalValue = y;
    }

    if (props.label === 'Blur') {
      conditionalValue = blur;
    }

    if (props.label === 'Spread') {
      conditionalValue = spread;
    }
  
  }

  setValue();


  const setAction = (event, val) => {

    if (props.label === 'x') {
      setXHandler(event, val);
    }

    if (props.label === 'y') {
      setYHandler(event, val);
    }

    if (props.label === 'Blur') {
      setBlurHandler(event, val);
    }

    if (props.label === 'Spread') {
      setSpreadHandler(event, val);
    }

  }



  return (
    <div className="control">
        <span className="control__label">{props.label}:</span> 
        <Slider className="control__slider" min={-100} max={100} defaultValue={conditionalValue} onChange={setAction} />
        <input className="control__text" type="text" defaultValue={conditionalValue}/>
    </div>
   );
}

export default SliderInput;