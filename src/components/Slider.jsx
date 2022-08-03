import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSetBehavior } from '../hooks/useSetBehavior';
import { setPropertiesActions } from '../store/index';


import '../styles/components/Slider.scss';


function Slider( { label, sliderType } ) {


  const dispatch = useDispatch();

  const { boxShadow_xOffset, boxShadow_yOffset, boxShadow_blur, boxShadow_spread, textShadow_xOffset, textShadow_yOffset, textShadow_blur, 
  
    opacity, blurFilter, border, borderRadius, minValue, maxValue, maxStep, initialState } = useSetBehavior(label, sliderType);
  


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

    if (label === 'XOffset' && sliderType === "boxshadow") {
      setXHandler__boxShadow(event);
    }

    if (label === 'YOffset' && sliderType === "boxshadow") {
      setYHandler__boxShadow(event);
    }

    if (label === 'Blur' && sliderType === "boxshadow") {
      setBlurHandler__boxShadow(event);
    }

    if (label === 'Spread' && sliderType === "boxshadow") {
      setSpreadHandler__boxShadow(event);
    }

    // Conditional actions for text-shadow prope
    if (label === 'XOffset' && sliderType === "textshadow") {
      setXHandler__textShadow(event);
    }

    if (label === 'YOffset' && sliderType === "textshadow") {
      setYHandler__textShadow(event);
    }

    if (label === 'Blur' && sliderType === "textshadow") {
      setBlurHandler__textShadow(event);
    }

    // Conditional state for glass morphism properties

    if (label === 'Opacity' && sliderType === "glassmorphism") {
      setOpacityHandler__glassMorphism(event);
    }
    
    if (label === 'Blur' && sliderType === "glassmorphism") {
      setBackdropFilterHandler__glassMorphism(event);
    }
    if (label === 'Border' && sliderType === "glassmorphism") {
      setBorderHandler__glassMorphism(event);
    }

    if (label === 'radius' && sliderType === "glassmorphism") {
      setBorderRadiusHandler__glassMorphism(event);
    }

  }


  return (
    <div className="slider">
      <span className="slider__label"> {label}: </span>
      <input type="range" className="slider__range" min={minValue} max={maxValue} step={maxStep} value={localState} onChange={setAction} />
      <input type="number" className="slider__number" min={minValue} max={maxValue} step={maxStep} value={localState} onChange={setAction} />
    </div>
  );
}

export default Slider;