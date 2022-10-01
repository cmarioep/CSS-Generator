// import { useState, useEffect, useRef } from 'react';

import { ChromePicker } from 'react-color';
import { useColorPickerBehavior } from '../hooks/useColorPickerBehavior';
import { useOnFocusToggle } from '../hooks/useOnFocusToggle';

import '../styles/components/ColorPicker.scss';


const ColorPicker = ({ label, colorPickerType }) => {


    const { setBehavior, currentValue } = useColorPickerBehavior(colorPickerType);

    const { focusElement, onFocus, onFocusHandler } = useOnFocusToggle();


    return (

        <div ref={focusElement} className="colorPicker">

            <div className="colorPicker__controls">

                <span className="colorPicker__controls__label">{label}:</span>

                <div
                    onClick={onFocusHandler}
                    style={{ backgroundColor: `rgba(${currentValue.r},${currentValue.g},${currentValue.b},${currentValue.a})`, width: `3.5rem`, height: `25px`, border: `0.5px solid #3D3535` }}>
                </div>

            </div>

            {onFocus && <ChromePicker
                className="colorPicker__picker"
                color={currentValue}
                onChange={setBehavior} />
            }

        </div>
    );

};


export default ColorPicker;