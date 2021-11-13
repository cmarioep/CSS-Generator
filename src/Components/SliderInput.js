import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setPropertiesActions} from '../store/index';


import './SliderInput.css';



function SliderInput(props) {

 
  const dispatch = useDispatch();

  const x = useSelector(state => state.x);
  const y = useSelector(state => state.y);
  const blur = useSelector(state => state.blur);
  const spread = useSelector(state => state.spread);
  let conditionalValue = 0;

 
  const [localState, setLocalState] = useState();

  const setXHandler = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setX(localState));

  };

  const setYHandler = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setY(localState));

  };

  const setBlurHandler = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setBlur(localState));

  };

  const setSpreadHandler = (event) => {
    setLocalState(event.target.value);
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


  const setAction = (event) => {

    if (props.label === 'x') {
      setXHandler(event);
    }

    if (props.label === 'y') {
      setYHandler(event);
    }

    if (props.label === 'Blur') {
      setBlurHandler(event);
    }

    if (props.label === 'Spread') {
      setSpreadHandler(event);
    }

  }

  return (
    <div className="control">
        <span className="control__label">{props.label}:</span> 
        <input type="range" className="control__slider" min={props.minRange || -100} max={200} defaultValue={localState} onChange={setAction}/>
        <span className="control__text">{conditionalValue}</span>
    </div>
   );
}

export default SliderInput;