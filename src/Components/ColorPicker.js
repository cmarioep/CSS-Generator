import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SketchPicker } from 'react-color';
import { setPropertiesActions } from '../store/index';



const ColorPicker = () => {

    const dispatch = useDispatch();

    const color = useSelector(state => state.color);
 
    const [localState, setlocalState] = useState('#3B3939');

    const colorPickedHandler = (event) => {
        setlocalState(event.hex);
        dispatch(setPropertiesActions.setColor(localState));
    };

    

    return(

        <SketchPicker color={color} onChange={ colorPickedHandler } />

    );
};

export default ColorPicker;