import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';

export const useSetBehavior = (label, sliderType) => {

  let minValue = -200;
  let maxValue = 200;
  let maxStep = 1;

  let initialState;

  const { boxShadow_xOffset, boxShadow_yOffset, boxShadow_blur, boxShadow_spread } = useSelector(state => state);

  const { textShadow_xOffset, textShadow_yOffset, textShadow_blur } = useSelector(state => state);

  const { glassMorphism_opacity, glassMorphism_blurFilter, glassMorphism_border, glassMorphism_borderRadius } = useSelector(state => state);


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


  const setTextShadowProperty = (label) => {

    const listOfProperties = {

      XOffset: textShadow_xOffset,
      YOffset: textShadow_yOffset,
      Blur: textShadow_blur,

    }

    initialState = listOfProperties[label];

    if (label === "Blur") minValue = 0;

  }


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



  const setInitialState = () => {

    if (sliderType === "boxshadow") setBoxShadowProperty(label);
    if (sliderType === "textshadow") setTextShadowProperty(label);
    if (sliderType === "glassmorphism") setGlassProperty(label);

  }

  setInitialState();
  

  if (sliderType === "boxshadow") {

    return {
      boxShadow_xOffset, boxShadow_yOffset, boxShadow_blur, boxShadow_spread,
      minValue, maxValue, maxStep,
      initialState,
    };

  }

  if (sliderType === "textshadow") {

    return {
      textShadow_xOffset, textShadow_yOffset, textShadow_blur,
      minValue, maxValue, maxStep,
      initialState,
    };

  }

  if (sliderType === "glassmorphism") {

    return {
      glassMorphism_opacity, glassMorphism_blurFilter, glassMorphism_border, glassMorphism_borderRadius,
      minValue, maxValue, maxStep,
      initialState,
    };

  }


}
