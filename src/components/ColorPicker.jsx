import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChromePicker } from 'react-color';
import { setPropertiesActions } from '../store/index';

import '../styles/components/ColorPicker.scss';


const ColorPicker = (props) => {

    const dispatch = useDispatch();



    const [localState, setlocalState] = useState(initialState);

    // Handlers to setState for box-shadow color

    const colorPickerdHandler__boxShadow = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setColor__boxShadow(event.rgb));
    };

    // Handlers to setState for text-shadow color

    const colorPickedHandler__textColor = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setTextColor__textShadow(event.rgb));
    };

    const colorPickedHandler__textShadow = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setShadowColor__textShadow(event.rgb));
    };

    // Handlers to setState for glass background-color

    const colorPickedHandler__glassMorphism = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setColor__glassMorphism(event.rgb));
    };


    // Conditional actions

    const setAction = (event) => {

        // Conditional actions for box-shadow color

        if (props.colorPickerType === "box-shadow") {
            colorPickerdHandler__boxShadow(event);
        }

        // Conditional actions for box-shadow properties

        if (props.colorPickerType === "text-color") {
            colorPickedHandler__textColor(event);
        }

        if (props.colorPickerType === "text-shadow") {
            colorPickedHandler__textShadow(event);
        }

        // Conditional actions for glass background-color

        if (props.colorPickerType === "glass-morphism") {
            colorPickedHandler__glassMorphism(event);
        }

    }

    // Hadler to show or hide the colorPicker
    const [toogle, setToogle] = useState(false);

    const setToogleHandler = () => {
        setToogle(!toogle);
    }

    // Component instance’s DOM reference
    let colorWrapper = useRef(null);

    useEffect(() => {

        // If the color picker is open and the clicked target is not within the picker, then close the picker
        const clickOutsideHandler = (event) => {
            if (colorWrapper.current && !colorWrapper.current.contains(event.target)) {
                setToogle(false);
            }
        };

        // Bind the event listener
        document.addEventListener('click', clickOutsideHandler);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('click', clickOutsideHandler);
        };
    });


    return (

        <div ref={colorWrapper} className="colorPicker">
            <div className="colorPicker__controls">
                <span className="colorPicker__controls__label">{props.label}:</span>
                <div onClick={setToogleHandler} style={{ backgroundColor: `rgba(${localState.r},${localState.g},${localState.b},${localState.a})`, width: `3.5rem`, height: `25px`, border: `0.5px solid #3D3535` }}></div>
            </div> 
            {toogle && <ChromePicker className="colorPicker__picker" color={localState} onChange={setAction} />}
        </div>
    );
};

export default ColorPicker;