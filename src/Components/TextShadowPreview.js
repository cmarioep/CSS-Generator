import {useSelector} from 'react-redux';

import './TextPreview.css'

function TextShadowPreview() {

    const xOffset = useSelector(state => state.textShadow_xOffset);
    const yOffset = useSelector(state => state.textShadow_yOffset);
    const blur = useSelector(state => state.textShadow_blur);
    const textColor = useSelector(state => state.textShadow_color);

    console.log(`desde text ${textColor}`);

    return(
        <h1 className="textPreview" style={{textShadow: `${xOffset}px ${yOffset}px ${blur}px rgba(${textColor.r},${textColor.g},${textColor.b},${textColor.a})`}}>
            Preview
        </h1>
    )
};

export default TextShadowPreview;