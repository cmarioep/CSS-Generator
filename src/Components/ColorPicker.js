import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChromePicker } from 'react-color';
import { setPropertiesActions } from '../store/index';



const ColorPicker = () => {

    const dispatch = useDispatch();

    const color = useSelector(state => state.box_color);
 
    const [localState, setlocalState] = useState(color);

    const colorPickedHandler = (event) => {
        setlocalState(event.rgb);
        dispatch(setPropertiesActions.setColor(localState));
    };

    

    return(

        <ChromePicker color={localState} onChange={ colorPickedHandler } />

    );
};

export default ColorPicker;