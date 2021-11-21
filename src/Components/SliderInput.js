import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';

import './SliderInput.css';

function SliderInput(props) {

  let minValue = -200;
 
  const dispatch = useDispatch();
  
  let initialState;
  const x = useSelector(state => state.box_xOffset);
  const y = useSelector(state => state.box_yOffset);
  const blur = useSelector(state => state.box_blur);
  const spread = useSelector(state => state.box_spread);


  const setInitialState = () => {

    if (props.label === 'x' && props.sliderType==="box-shadow") {
      initialState = x;
    }

    if (props.label === 'y' && props.sliderType==="box-shadow") {
      initialState = y;
    }

    if (props.label === 'Blur' && props.sliderType==="box-shadow") {
      initialState = blur;
      minValue = 0;
    }

    if (props.label === 'Spread' && props.sliderType==="box-shadow") {
      initialState = spread;
     }
  
  }

  setInitialState();

 
  const [localState, setLocalState] = useState(initialState);

  const setXHandler__boxShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setX__boxShadow(localState));

  };

  const setYHandler__boxShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setY__boxShadow(localState));

  };

  const setBlurHandler__boxShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setBlur__boxShadow(localState));

  };

  const setSpreadHandler__boxShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setSpread__boxShadow(localState));

  };


  const setAction = (event) => {

    if (props.label === 'x' && props.sliderType==="box-shadow") {
      setXHandler__boxShadow(event);
    }

    if (props.label === 'y' && props.sliderType==="box-shadow") {
      setYHandler__boxShadow(event);
    }

    if (props.label === 'Blur' && props.sliderType==="box-shadow") {
      setBlurHandler__boxShadow(event);
    }

    if (props.label === 'Spread' && props.sliderType==="box-shadow") {
      setSpreadHandler__boxShadow(event);
    }

  }


  return (
    <div className="control">
        <span className="control__label">{props.label}:</span> 
        <input type="range" className="control__slider" min={minValue} max={200} value={localState} onChange={setAction}/>
        <input type="number" className="control__text" min={minValue} max={200} value={localState} onChange={setAction} />
    </div>
   );
}

export default SliderInput;