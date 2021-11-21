import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChromePicker } from 'react-color';
import { setPropertiesActions } from '../store/index';



const ColorPicker = (props) => {

    const dispatch = useDispatch();

    let initialState;
    const box__color = useSelector(state => state.box_color);
    const text__color = useSelector(state => state.text_color);

    const setInitialState = () => {

        // Conditional state for box-shadow color
    
        if (props.colorPickerType==="box-shadow") {
          initialState = box__color;
        }

        // Conditional state for text-shadow color
        if (props.colorPickerType==="text-shadow") {
            initialState = text__color;
        }
      
    }
    
    setInitialState();

    
    const [localState, setlocalState] = useState(initialState);
    
    // Handlers to setState for box-shadow color

    const colorPickerdHandler__boxShadow = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setColor__boxShadow(localState));
    };

    // Handlers to setState for text-shadow color
    
    const colorPickedHandler__textShadow = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setColor__textShadow(localState));
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

    }


    return(
        <ChromePicker color={localState} onChange={ setAction } />
    );
};

export default ColorPicker;