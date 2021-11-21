import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';

import './SliderInput.css';

function SliderInput(props) {

  let minValue = -200;
 
  const dispatch = useDispatch();
  
  let initialState;
  const box_xOffset = useSelector(state => state.box_xOffset);
  const box_yOffset = useSelector(state => state.box_yOffset);
  const box_blur = useSelector(state => state.box_blur);
  const box_spread = useSelector(state => state.box_spread);

  const text_xOffset = useSelector(state => state.text_xOffset);
  const text_yOffset = useSelector(state => state.text_yOffset);
  const text_blur = useSelector(state => state.text_blur);



  const setInitialState = () => {

    // Conditional state for box-shadow properties

    if (props.label === 'x' && props.sliderType==="box-shadow") {
      initialState = box_xOffset;
    }

    if (props.label === 'y' && props.sliderType==="box-shadow") {
      initialState = box_yOffset;
    }

    if (props.label === 'Blur' && props.sliderType==="box-shadow") {
      initialState = box_blur;
      minValue = 0;
    }

    if (props.label === 'Spread' && props.sliderType==="box-shadow") {
      initialState = box_spread;
     }

     // Conditional state for text-shadow properties

    if (props.label === 'x' && props.sliderType==="text-shadow") {
      initialState = text_xOffset;
    }

    if (props.label === 'y' && props.sliderType==="text-shadow") {
      initialState = text_yOffset;
    }

    if (props.label === 'Blur' && props.sliderType==="text-shadow") {
      initialState = text_blur;
      minValue = 0;
    }
  
  }

  setInitialState();

 
  const [localState, setLocalState] = useState(initialState);

  // Handlers to setState for box-shadow properties

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

  // Handlers to setState for box-shadow properties

  const setXHandler__textShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setX__textShadow(localState));

  };

  const setYHandler__textShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setY__textShadow(localState));

  };

  const setBlurHandler__textShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setBlur__textShadow(localState));

  };


  // Conditional actions
  
  const setAction = (event) => {
    
    // Conditional actions for box-shadow properties

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

    // Conditional actions for text-shadow properties

    if (props.label === 'x' && props.sliderType==="text-shadow") {
      setXHandler__textShadow(event);
    }

    if (props.label === 'y' && props.sliderType==="text-shadow") {
      setYHandler__textShadow(event);
    }

    if (props.label === 'Blur' && props.sliderType==="text-shadow") {
      setBlurHandler__textShadow(event);
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