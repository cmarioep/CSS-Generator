import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';

import './SliderInput.css';

function SliderInput(props) {

  let minValue = -200;

  const dispatch = useDispatch();

  let initialState;
  const boxShadow_xOffset = useSelector(state => state.boxShadow_xOffset);
  const boxShadow_yOffset = useSelector(state => state.boxShadow_yOffset);
  const boxShadow_blur = useSelector(state => state.boxShadow_blur);
  const boxShadow_spread = useSelector(state => state.boxShadow_spread);

  const textShadow_xOffset = useSelector(state => state.textShadow_xOffset);
  const textShadow_yOffset = useSelector(state => state.textShadow_yOffset);
  const textShadow_blur = useSelector(state => state.textShadow_blur);



  const setInitialState = () => {

    // Conditional state for box-shadow properties

    if (props.label === 'x' && props.sliderType === "box-shadow") {
      initialState = boxShadow_xOffset;
    }

    if (props.label === 'y' && props.sliderType === "box-shadow") {
      initialState = boxShadow_yOffset;
    }

    if (props.label === 'Blur' && props.sliderType === "box-shadow") {
      initialState = boxShadow_blur;
      minValue = 0;
    }

    if (props.label === 'Spread' && props.sliderType === "box-shadow") {
      initialState = boxShadow_spread;
    }

    // Conditional state for text-shadow properties

    if (props.label === 'x' && props.sliderType === "text-shadow") {
      initialState = textShadow_xOffset;
    }

    if (props.label === 'y' && props.sliderType === "text-shadow") {
      initialState = textShadow_yOffset;
    }

    if (props.label === 'Blur' && props.sliderType === "text-shadow") {
      initialState = textShadow_blur;
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

    if (props.label === 'x' && props.sliderType === "box-shadow") {
      setXHandler__boxShadow(event);
    }

    if (props.label === 'y' && props.sliderType === "box-shadow") {
      setYHandler__boxShadow(event);
    }

    if (props.label === 'Blur' && props.sliderType === "box-shadow") {
      setBlurHandler__boxShadow(event);
    }

    if (props.label === 'Spread' && props.sliderType === "box-shadow") {
      setSpreadHandler__boxShadow(event);
    }

    // Conditional actions for text-shadow properties

    if (props.label === 'x' && props.sliderType === "text-shadow") {
      setXHandler__textShadow(event);
    }

    if (props.label === 'y' && props.sliderType === "text-shadow") {
      setYHandler__textShadow(event);
    }

    if (props.label === 'Blur' && props.sliderType === "text-shadow") {
      setBlurHandler__textShadow(event);
    }
  }


  return (
    <div className="control">
      <span className="control__label">{props.label}:</span>
      <input type="range" className="control__slider" min={minValue} max={200} value={localState} onChange={setAction} />
      <input type="number" className="control__text" min={minValue} max={200} value={localState} onChange={setAction} />
    </div>
  );
}

export default SliderInput;