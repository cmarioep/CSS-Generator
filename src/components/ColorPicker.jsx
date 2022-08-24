import { useState, useEffect, useRef } from 'react';

import { ChromePicker } from 'react-color';
import { useColorPickerBehavior } from '../hooks/useColorPickerBehavior';


import '../styles/components/ColorPicker.scss';


const ColorPicker = ({label, colorPickerType}) => {


    const { setBehavior, currentValue } = useColorPickerBehavior(colorPickerType);


    // Hadler to show or hide the colorPicker
    const [toogle, setToogle] = useState(false);
    

    const setToogleHandler = () => {
        setToogle(!toogle);
    }


    // Component instance’s DOM reference
    let controlWrapper = useRef(null);


    useEffect(() => {

        // If the color picker is open and the clicked target is not within the picker, then close the picker
        const clickOutsideHandler = (event) => {
            if (controlWrapper.current && !controlWrapper.current.contains(event.target)) {
                setToogle(false);
            }
        };

        // Bind the event listener
        document.addEventListener('click', clickOutsideHandler);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('click', clickOutsideHandler);
        };
        
    }, []);

    

    return (

        <div ref={controlWrapper} className="colorPicker">
            <div className="colorPicker__controls">
                <span className="colorPicker__controls__label">{label}:</span>
                <div onClick={setToogleHandler} style={{ backgroundColor: `rgba(${currentValue.r},${currentValue.g},${currentValue.b},${currentValue.a})`, width: `3.5rem`, height: `25px`, border: `0.5px solid #3D3535` }}></div>
            </div> 
            {toogle && <ChromePicker className="colorPicker__picker" color={currentValue} onChange={setBehavior} />}
        </div>
    );

};


export default ColorPicker;