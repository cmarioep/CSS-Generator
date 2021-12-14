import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChromePicker } from 'react-color';
import { setPropertiesActions } from '../store/index';

import './Controls.css';


const ColorPicker = (props) => {

    const dispatch = useDispatch();

    let initialState;
    const boxShadow_color = useSelector(state => state.boxShadow_color);
    const textShadow_color = useSelector(state => state.textShadow_color);
    const glassMorphism_color = useSelector(state => state.glassMorphism_color);


    const setInitialState = () => {

        // Conditional state for box-shadow color
    
        if (props.colorPickerType==="box-shadow") {
          initialState = boxShadow_color;
        }

        // Conditional state for text-shadow color
        if (props.colorPickerType==="text-shadow") {
            initialState = textShadow_color;
        }

        // Conditional state for glass background-color
        if (props.colorPickerType==="glass-morphism") {
            initialState = glassMorphism_color;
        }
      
    }
    
    setInitialState();

    
    const [localState, setlocalState] = useState(initialState);
    
    // Handlers to setState for box-shadow color

    const colorPickerdHandler__boxShadow = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setColor__boxShadow(event.rgb));
    };

    // Handlers to setState for text-shadow color
    
    const colorPickedHandler__textShadow = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setColor__textShadow(event.rgb));
    };

    // Handlers to setState for glass background-color
    
    const colorPickedHandler__glassMorphism = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setColor__glassMorphism(event.rgb));
    };

    
    // Conditional actions

    const setAction = (event) => {
        
        // Conditional actions for box-shadow color

        if (props.colorPickerType==="box-shadow") {
            colorPickerdHandler__boxShadow(event);
        }
    
        // Conditional actions for box-shadow properties
    
        if (props.colorPickerType==="text-shadow") {
            colorPickedHandler__textShadow(event);
        }

        // Conditional actions for glass background-color
    
        if (props.colorPickerType==="glass-morphism") {
            colorPickedHandler__glassMorphism(event);
        }

    }

   
    return(
        <div>
            <span className="control__label">{props.label}:</span>
            <div  style={{backgroundColor: `rgba(${localState.r},${localState.g},${localState.b},${localState.a})`, width: `50px`, height: `25px`, border: `0.5px solid #3D3535`}}></div>
            <ChromePicker color={localState} onChange={ setAction } />
        </div>
    );
};

export default ColorPicker;