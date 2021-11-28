import {useSelector} from 'react-redux';

import CopyToClipboard from '../Components/CopyToClipboard';

import './BoxShadowGeneratedCode.css';


const BoxGeneratedCode = () => {

    const xOffset = useSelector(state => state.boxShadow_xOffset);
    const yOffset = useSelector(state => state.boxShadow_yOffset);
    const blur = useSelector(state => state.boxShadow_blur);
    const spread = useSelector(state => state.boxShadow_spread);
    const color = useSelector(state => state.boxShadow_color);

    const generatedCode = `box-shadow: ${xOffset}px ${yOffset}px ${blur}px ${spread}px rgba(${color.r},${color.g},${color.b},${color.a})`

    return(
        <div className="boxShadowGenerated">
            <input className="boxShadowGenerated__code" type="textarea" value={generatedCode} readOnly/>
            <CopyToClipboard />
        </div>
    )
};

export default BoxGeneratedCode;