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

  const { opacity, blurFilter, border, borderRadius } = useSelector(state => state);


  const setBoxShadowProperty = (label) => {
    
    const listOfProperties = {

      XOffset: boxShadow_xOffset,
      YOffset: boxShadow_yOffset,
      Blur: boxShadow_blur,
      Spread: boxShadow_spread,

    }

    initialState = listOfProperties[ label ];
    console.log(initialState)

  }


  const setTextShadowProperty = (label) => {
    
    const listOfProperties = {

      XOffset: textShadow_xOffset,
      YOffset: textShadow_yOffset,
      Blur: textShadow_blur,

    }

    initialState = listOfProperties[ label ];
    console.log(initialState)

  }


  const setGlassProperty = (label) => {
    
    const listOfProperties = {

      Opacity: opacity,
      Blur: blurFilter,
      Border: border,
      radius: borderRadius,

    }

    initialState = listOfProperties[ label ];
    console.log(initialState)

  }



  const setInitialState = () => {

    if (sliderType === "boxshadow") {setBoxShadowProperty(label);}
    if (sliderType === "textshadow") {setTextShadowProperty(label);}
    if (sliderType === "glassmorphism") {setGlassProperty(label);}

  }

  setInitialState();


  return {

    boxShadow_xOffset, boxShadow_yOffset, boxShadow_blur, boxShadow_spread,

    textShadow_xOffset, textShadow_yOffset, textShadow_blur,

    opacity, blurFilter, border, borderRadius,

    minValue, maxValue, maxStep,

    initialState,
    
  };
}
