import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';

import './SliderInput.css';

function SliderInput(props) {

  let minValue = -200;
  let maxValue = 200;
  let maxStep = 1;

  const dispatch = useDispatch();

  let initialState;
  const boxShadow_xOffset = useSelector(state => state.boxShadow_xOffset);
  const boxShadow_yOffset = useSelector(state => state.boxShadow_yOffset);
  const boxShadow_blur = useSelector(state => state.boxShadow_blur);
  const boxShadow_spread = useSelector(state => state.boxShadow_spread);

  const textShadow_xOffset = useSelector(state => state.textShadow_xOffset);
  const textShadow_yOffset = useSelector(state => state.textShadow_yOffset);
  const textShadow_blur = useSelector(state => state.textShadow_blur);

  const opacity = useSelector(state => state.glassMorphism_opacity);
  const blurFilter = useSelector(state => state.glassMorphism_blurFilter);
  const border = useSelector(state => state.glassMorphism_border);
  const borderRadius = useSelector(state => state.glassMorphism_borderRadius);



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

    // Conditional state for glass morphism properties
    
    if (props.label === 'Opacity' && props.sliderType === "glass-morphism") {
      initialState = opacity;
      minValue = 0;
      maxValue = 0.5;
      maxStep = 0.001;
    }
    
    if (props.label === 'Blur' && props.sliderType === "glass-morphism") {
      initialState = blurFilter;
      minValue = 0;
      maxValue = 20;
    }
    if (props.label === 'Border' && props.sliderType === "glass-morphism") {
      initialState = border;
      minValue = 0;
      maxValue = 10;
    }

    if (props.label === 'Border radius' && props.sliderType === "glass-morphism") {
      initialState = borderRadius;
      minValue = 0;
      maxValue = 100;
    }

  }

  setInitialState();


  const [localState, setLocalState] = useState(initialState);


  // Handlers to setState for box-shadow properties

  const setXHandler__boxShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setX__boxShadow(event.target.value));

  };

  const setYHandler__boxShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setY__boxShadow(event.target.value));

  };

  const setBlurHandler__boxShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setBlur__boxShadow(event.target.value));

  };

  const setSpreadHandler__boxShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setSpread__boxShadow(event.target.value));

  };


  // Handlers to setState for box-shadow properties

  const setXHandler__textShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setX__textShadow(event.target.value));

  };

  const setYHandler__textShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setY__textShadow(event.target.value));

  };

  const setBlurHandler__textShadow = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setBlur__textShadow(event.target.value));

  };


  // Handlers to setState for glass morphism properties

  const setOpacityHandler__glassMorphism = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setOpacity__glassMorphism(event.target.value));
  };

  const  setBackdropFilterHandler__glassMorphism = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setBackdropFilter__glassMorphism(event.target.value));
  };

  const  setBorderHandler__glassMorphism = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setBorder__glassMorphism(event.target.value));
  };

  const  setBorderRadiusHandler__glassMorphism = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setBorderRadius__glassMorphism(event.target.value));
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

    // Conditional state for glass morphism properties

    if (props.label === 'Opacity' && props.sliderType === "glass-morphism") {
      setOpacityHandler__glassMorphism(event);
    }
    
    if (props.label === 'Blur' && props.sliderType === "glass-morphism") {
      setBackdropFilterHandler__glassMorphism(event);
    }
    if (props.label === 'Border' && props.sliderType === "glass-morphism") {
      setBorderHandler__glassMorphism(event);
    }

    if (props.label === 'Border radius' && props.sliderType === "glass-morphism") {
      setBorderRadiusHandler__glassMorphism(event);
    }

  }


  return (
    <div className="control">
      <span className="control__label">{props.label}:</span>
      <input type="range" className="control__slider" min={minValue} max={maxValue} step={maxStep} value={localState} onChange={setAction} />
      <input type="number" className="control__number" min={minValue} max={maxValue} step={maxStep} value={localState} onChange={setAction} />
    </div>
  );
}

export default SliderInput;