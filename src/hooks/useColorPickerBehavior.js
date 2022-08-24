import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';



export const useColorPickerBehavior = (colorPickerType) => {

    let initialState;


    // *** Redux global state for all color properties ***

    // Global values for box-shadow properties
    const boxShadow_color = useSelector(state => state.boxShadow_color);

    // Global values for text-shadow color properties
    const textShadow_textColor = useSelector(state => state.textShadow_textColor);
    const textShadow_shadowColor = useSelector(state => state.textShadow_shadowColor);

    // Global values for glass morphism color properties
    const glassMorphism_color = useSelector(state => state.glassMorphism_color);


    // ***  Aux function to set initial color property according to colorPickerType props  ***
    const setInitialState = () => {

    const associatedProperties = {

        boxshadow: boxShadow_color,
        textcolor: textShadow_textColor,
        textshadow: textShadow_shadowColor,
        glassmorphism: glassMorphism_color,

    }

        initialState = associatedProperties[colorPickerType];

    }

    setInitialState();


    // *** Hadlers to manage Redux global state for color properties ***
    
    const [currentValue, setCurrentValue] = useState(initialState);
    
    const dispatch = useDispatch();

    // Handlers to setState for box-shadow color

    const colorPickerdHandler__boxShadow = (event) => {
        setCurrentValue(event.rgb);
        dispatch(setPropertiesActions.setColor__boxShadow(event.rgb));
    };

    // Handlers to setState for text-shadow color

    const colorPickedHandler__textColor = (event) => {
        setCurrentValue(event.rgb);
        dispatch(setPropertiesActions.setTextColor__textShadow(event.rgb));
    };

    const colorPickedHandler__textShadow = (event) => {
        setCurrentValue(event.rgb);
        dispatch(setPropertiesActions.setShadowColor__textShadow(event.rgb));
    };

    // Handlers to setState for glass background-color

    const colorPickedHandler__glassMorphism = (event) => {
        setCurrentValue(event.rgb);
        dispatch(setPropertiesActions.setColor__glassMorphism(event.rgb));
    };


    // *** set handler according to colorPickerType props***
    
    const setBehavior = (event) => {

        // Conditional actions for box-shadow color propertie
        if (colorPickerType === "boxshadow") {
            colorPickerdHandler__boxShadow(event);
        }

        // Conditional actions for text-shadow color properties
        if (colorPickerType === "textcolor") {
            colorPickedHandler__textColor(event);
        }

        if (colorPickerType === "textshadow") {
            colorPickedHandler__textShadow(event);
        }

        // Conditional actions for glass background-color propertie
        if (colorPickerType === "glassmorphism") {
            colorPickedHandler__glassMorphism(event);
        }

    }


    return {
        currentValue,
        setBehavior
    }

}

