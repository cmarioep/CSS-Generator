import {useSelector} from 'react-redux';
import './Box.css';

function Box() {

    const xOffset = useSelector(state => state.box_xOffset);
    const yOffset = useSelector(state => state.box_yOffset);
    const blur = useSelector(state => state.box_blur);
    const spread = useSelector(state => state.box_spread);
    const color = useSelector(state => state.box_color);

    const generatedCode = `box-shadow: ${xOffset}px ${yOffset}px ${blur}px ${spread}px rgba(${color.r},${color.g},${color.b},${color.a})`


    return(
        <div className="box" 
            style={{boxShadow: `${xOffset}px ${yOffset}px ${blur}px ${spread}px rgba(${color.r},${color.g},${color.b},${color.a})`}}>
            
            <input className="box__code" type="text" value={generatedCode}/>
        </div>
    )
};

export default Box;