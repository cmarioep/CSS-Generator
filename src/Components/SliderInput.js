import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';

import './SliderInput.css';

function SliderInput(props) {

  let minValue = -200;
 
  const dispatch = useDispatch();
  
  let initialState;
  const x = useSelector(state => state.x);
  const y = useSelector(state => state.y);
  const blur = useSelector(state => state.blur);
  const spread = useSelector(state => state.spread);


  const setInitialState = () => {

    if (props.label === 'x') {
      initialState = x;
    }

    if (props.label === 'y') {
      initialState = y;
    }

    if (props.label === 'Blur') {
      initialState = blur;
      minValue = 0;
    }

    if (props.label === 'Spread') {
      initialState = spread;
     }
  
  }

  setInitialState();

 
  const [localState, setLocalState] = useState(initialState);

  const setXHandler = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setX(localState));

  };

  const setYHandler = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setY(localState));

  };

  const setBlurHandler = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setBlur(localState));

  };

  const setSpreadHandler = (event) => {
    setLocalState(event.target.value);
    dispatch(setPropertiesActions.setSpread(localState));

  };


  const setAction = (event) => {

    if (props.label === 'x') {
      setXHandler(event);
    }

    if (props.label === 'y') {
      setYHandler(event);
    }

    if (props.label === 'Blur') {
      setBlurHandler(event);
    }

    if (props.label === 'Spread') {
      setSpreadHandler(event);
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