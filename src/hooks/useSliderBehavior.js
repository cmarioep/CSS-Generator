import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';

export const useSliderBehavior = (label, sliderType) => {

  // default control values
  let minValue = -200;
  let maxValue = 200;
  let maxStep = 1;

  let initialState;
  
  // *** Redux global state for all properties ***
  // Global values for box-shadow properties
  const { boxShadow_xOffset, boxShadow_yOffset, boxShadow_blur, boxShadow_spread } = useSelector(state => state);
  // Global values for text-shadow properties
  const { textShadow_xOffset, textShadow_yOffset, textShadow_blur } = useSelector(state => state);
  // Global values for glass morphism properties
  const { glassMorphism_opacity, glassMorphism_blurFilter, glassMorphism_border, glassMorphism_borderRadius } = useSelector(state => state);

  

  // Aux function to set initial values on box-shadow property control according to label prop
  const setBoxShadowProperty = (label) => {

    const listOfProperties = {

      XOffset: boxShadow_xOffset,
      YOffset: boxShadow_yOffset,
      Blur: boxShadow_blur,
      Spread: boxShadow_spread,

    }

    initialState = listOfProperties[label];

    if (label === "Blur") minValue = 0;

  }


  // Aux function to set initial values on text-shadow property control according to label prop
  const setTextShadowProperty = (label) => {

    const listOfProperties = {

      XOffset: textShadow_xOffset,
      YOffset: textShadow_yOffset,
      Blur: textShadow_blur,

    }

    initialState = listOfProperties[label];
    
    if (label === "Blur") minValue = 0;

  }


  // Aux function to set initial values on glass morphism property control according to label prop
  const setGlassProperty = (label) => {

    const listOfProperties = {

      Opacity: glassMorphism_opacity,
      Blur: glassMorphism_blurFilter,
      Border: glassMorphism_border,
      radius: glassMorphism_borderRadius,

    }

    initialState = listOfProperties[label];
    minValue = 0;

    if (label === "Opacity") {      
      maxValue = 0.5;
      maxStep = 0.001;
    }

    if (label === "Blur") maxValue = 20;
    if (label === "Border") maxValue = 10;
    if (label === "radius") maxValue = 100;

  }


  // Set initial state for slider according to sliderType prop
  const setInitialState = () => {

    if (sliderType === "boxshadow") setBoxShadowProperty(label);
    if (sliderType === "textshadow") setTextShadowProperty(label);
    if (sliderType === "glassmorphism") setGlassProperty(label);

  }

  setInitialState();

  
  // *** Hadlers to manage Redux global state for all properties ***

  const [currentValue, setCurrentValue] = useState(initialState);

  const dispatch = useDispatch();


  // Handlers to setState for box-shadow properties
  const setXHandler__boxShadow = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setX__boxShadow(event.target.value));

  };

  const setYHandler__boxShadow = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setY__boxShadow(event.target.value));

  };

  const setBlurHandler__boxShadow = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setBlur__boxShadow(event.target.value));

  };

  const setSpreadHandler__boxShadow = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setSpread__boxShadow(event.target.value));

  };


  // Handlers to setState for box-shadow properties
  const setXHandler__textShadow = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setX__textShadow(event.target.value));

  };

  const setYHandler__textShadow = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setY__textShadow(event.target.value));

  };

  const setBlurHandler__textShadow = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setBlur__textShadow(event.target.value));

  };


  // Handlers to setState for glass morphism properties
  const setOpacityHandler__glassMorphism = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setOpacity__glassMorphism(event.target.value));
  };

  const  setBackdropFilterHandler__glassMorphism = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setBackdropFilter__glassMorphism(event.target.value));
  };

  const  setBorderHandler__glassMorphism = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setBorder__glassMorphism(event.target.value));
  };

  const  setBorderRadiusHandler__glassMorphism = (event) => {
    setCurrentValue(event.target.value);
    dispatch(setPropertiesActions.setBorderRadius__glassMorphism(event.target.value));
  };

  
  // *** set handler according to label and sliderType props***
  
  const setBehavior = (event) => {

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
 

  return {
    currentValue,
    minValue, maxValue, maxStep,
    setBehavior
  }



}
