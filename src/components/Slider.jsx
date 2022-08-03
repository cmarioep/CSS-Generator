import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSetBehavior } from '../hooks/useSetBehavior';
import { setPropertiesActions } from '../store/index';


import '../styles/components/Slider.scss';


function Slider( { label, sliderType } ) {


  const dispatch = useDispatch();

  const { boxShadow_xOffset, boxShadow_yOffset, boxShadow_blur, boxShadow_spread, textShadow_xOffset, textShadow_yOffset, textShadow_blur, 
  
    opacity, blurFilter, border, borderRadius, minValue, maxValue, maxStep, initialState, setInitialState } = useSetBehavior();
  

  setInitialState( label, sliderType );


  // let initialState;

  // const { boxShadow_xOffset, boxShadow_yOffset, boxShadow_blur, boxShadow_spread} = useSelector(state => state);

  // const { textShadow_xOffset, textShadow_yOffset, textShadow_blur } = useSelector(state => state);

  // const { opacity, blurFilter, border, borderRadius } = useSelector(state => state);



  // const setInitialState = () => {

  //   // Conditional state for box-shadow properties

  //   if (label === 'X-Offset' && sliderType === "box-shadow") {
  //     initialState = boxShadow_xOffset;
  //   }

  //   if (label === 'Y-Offset' && sliderType === "box-shadow") {
  //     initialState = boxShadow_yOffset;
  //   }

  //   if (label === 'Blur' && sliderType === "box-shadow") {
  //     initialState = boxShadow_blur;
  //     minValue = 0;
  //   }

  //   if (label === 'Spread' && sliderType === "box-shadow") {
  //     initialState = boxShadow_spread;
  //   }


  //   // Conditional state for text-shadow properties

  //   if (label === 'X-Offset' && sliderType === "text-shadow") {
  //     initialState = textShadow_xOffset;
  //   }

  //   if (label === 'Y-Offset' && sliderType === "text-shadow") {
  //     initialState = textShadow_yOffset;
  //   }

  //   if (label === 'Blur' && sliderType === "text-shadow") {
  //     initialState = textShadow_blur;
  //     minValue = 0;
  //   }

  //   // Conditional state for glass morphism properties
    
  //   if (label === 'Opacity' && sliderType === "glass-morphism") {
  //     initialState = opacity;
  //     minValue = 0;
  //     maxValue = 0.5;
  //     maxStep = 0.001;
  //   }
    
  //   if (label === 'Blur' && sliderType === "glass-morphism") {
  //     initialState = blurFilter;
  //     minValue = 0;
  //     maxValue = 20;
  //   }
  //   if (label === 'Border' && sliderType === "glass-morphism") {
  //     initialState = border;
  //     minValue = 0;
  //     maxValue = 10;
  //   }

  //   if (label === 'Border radius' && sliderType === "glass-morphism") {
  //     initialState = borderRadius;
  //     minValue = 0;
  //     maxValue = 100;
  //   }

  // }

  // setInitialState();


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

    if (label === 'X-Offset' && sliderType === "box-shadow") {
      setXHandler__boxShadow(event);
    }

    if (label === 'Y-Offset' && sliderType === "box-shadow") {
      setYHandler__boxShadow(event);
    }

    if (label === 'Blur' && sliderType === "box-shadow") {
      setBlurHandler__boxShadow(event);
    }

    if (label === 'Spread' && sliderType === "box-shadow") {
      setSpreadHandler__boxShadow(event);
    }

    // Conditional actions for text-shadow prope
    if (label === 'X-Offset' && sliderType === "text-shadow") {
      setXHandler__textShadow(event);
    }

    if (label === 'Y-Offset' && sliderType === "text-shadow") {
      setYHandler__textShadow(event);
    }

    if (label === 'Blur' && sliderType === "text-shadow") {
      setBlurHandler__textShadow(event);
    }

    // Conditional state for glass morphism properties

    if (label === 'Opacity' && sliderType === "glass-morphism") {
      setOpacityHandler__glassMorphism(event);
    }
    
    if (label === 'Blur' && sliderType === "glass-morphism") {
      setBackdropFilterHandler__glassMorphism(event);
    }
    if (label === 'Border' && sliderType === "glass-morphism") {
      setBorderHandler__glassMorphism(event);
    }

    if (label === 'Border radius' && sliderType === "glass-morphism") {
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