import {useSelector} from 'react-redux';

import './BoxGeneratedCode.css';


const BoxGeneratedCode = () => {

    const xOffset = useSelector(state => state.box_xOffset);
    const yOffset = useSelector(state => state.box_yOffset);
    const blur = useSelector(state => state.box_blur);
    const spread = useSelector(state => state.box_spread);
    const color = useSelector(state => state.box_color);

    const generatedCode = `box-shadow: ${xOffset}px ${yOffset}px ${blur}px ${spread}px rgba(${color.r},${color.g},${color.b},${color.a})`

    return(
        <input className="box__code" type="textarea" value={generatedCode}/>
    )
};

export default BoxGeneratedCode;