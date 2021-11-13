import { useState } from 'react';
import { SketchPicker } from 'react-color';



const ColorPicker = () => {
 
    const [color, setColor] = useState('#3B3939');

    const colorPickedHandler = (event) => {
        setColor(event.hex);
    };


    return(

        <SketchPicker color={color} onChangeComplete={ colorPickedHandler } />

    );
};

export default ColorPicker;