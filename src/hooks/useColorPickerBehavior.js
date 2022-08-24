import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPropertiesActions } from '../store/index';



export const useColorPickerBehavior = (label, colorPickerType) => {

    let initialState;

    // *** Redux global state for all color properties ***

    // Global values for box-shadow properties
    const boxShadow_color = useSelector(state => state.boxShadow_color);

    // Global values for text-shadow color properties
    const textShadow_textColor = useSelector(state => state.textShadow_textColor);
    const textShadow_shadowColor = useSelector(state => state.textShadow_shadowColor);

    // Global values for glass morphism color properties
    const glassMorphism_color = useSelector(state => state.glassMorphism_color);


    // Aux function to set initial color property according to label colorPickerType
    const setInitialState = (colorPickerType) => {

    const associatedProperties = {

        boxshadow: boxShadow_color,
        textcolor: textShadow_textColor,
        textshadow: textShadow_shadowColor,
        glassmorphism: glassMorphism_color,

    }

        initialState = associatedProperties[colorPickerType];

    }

    setInitialState();



    return {

    }

}

