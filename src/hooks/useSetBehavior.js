import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';

export const useSetBehavior = () => {

  let minValue = -200;
  let maxValue = 200;
  let maxStep = 1;

  let initialState;


  const { boxShadow_xOffset, boxShadow_yOffset, boxShadow_blur, boxShadow_spread } = useSelector(state => state);

  const { textShadow_xOffset, textShadow_yOffset, textShadow_blur } = useSelector(state => state);

  const { opacity, blurFilter, border, borderRadius } = useSelector(state => state);


  const setInitialState = (label, sliderType) => {

    // Conditional state for box-shadow properties

    if (label === 'X-Offset' && sliderType === "box-shadow") {
      initialState = boxShadow_xOffset;
    }

    if (label === 'Y-Offset' && sliderType === "box-shadow") {
      initialState = boxShadow_yOffset;
    }

    if (label === 'Blur' && sliderType === "box-shadow") {
      initialState = boxShadow_blur;
      minValue = 0;
    }

    if (label === 'Spread' && sliderType === "box-shadow") {
      initialState = boxShadow_spread;
    }


    // Conditional state for text-shadow properties

    if (label === 'X-Offset' && sliderType === "text-shadow") {
      initialState = textShadow_xOffset;
    }

    if (label === 'Y-Offset' && sliderType === "text-shadow") {
      initialState = textShadow_yOffset;
    }

    if (label === 'Blur' && sliderType === "text-shadow") {
      initialState = textShadow_blur;
      minValue = 0;
    }

    // Conditional state for glass morphism properties

    if (label === 'Opacity' && sliderType === "glass-morphism") {
      initialState = opacity;
      minValue = 0;
      maxValue = 0.5;
      maxStep = 0.001;
    }

    if (label === 'Blur' && sliderType === "glass-morphism") {
      initialState = blurFilter;
      minValue = 0;
      maxValue = 20;
    }
    if (label === 'Border' && sliderType === "glass-morphism") {
      initialState = border;
      minValue = 0;
      maxValue = 10;
    }

    if (label === 'Border radius' && sliderType === "glass-morphism") {
      initialState = borderRadius;
      minValue = 0;
      maxValue = 100;
    }

  }

  return {

    boxShadow_xOffset, boxShadow_yOffset, boxShadow_blur, boxShadow_spread,

    textShadow_xOffset, textShadow_yOffset, textShadow_blur,

    opacity, blurFilter, border, borderRadius,

    minValue, maxValue, maxStep,

    initialState,
    setInitialState


  };
}
