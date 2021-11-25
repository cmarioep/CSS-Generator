import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChromePicker } from 'react-color';
import { setPropertiesActions } from '../store/index';



const ColorPicker = (props) => {

    const dispatch = useDispatch();

    let initialState;
    const boxShadow__color = useSelector(state => state.boxShadow_color);
    const textShadow__color = useSelector(state => state.textShadow_color);

    const setInitialState = () => {

        // Conditional state for box-shadow color
    
        if (props.colorPickerType==="box-shadow") {
          initialState = boxShadow__color;
        }

        // Conditional state for text-shadow color
        if (props.colorPickerType==="text-shadow") {
            initialState = textShadow__color;
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