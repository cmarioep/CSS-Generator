import {useSelector} from 'react-redux';

import './TextPreview.css'

function TextPreview() {

    const xOffset = useSelector(state => state.text_xOffset);
    const yOffset = useSelector(state => state.text_yOffset);
    const blur = useSelector(state => state.text_blur);
    const textColor = useSelector(state => state.text_color);

    console.log(`desde text ${textColor}`);

    return(
        <h1 className="textPreview" style={{textShadow: `${xOffset}px ${yOffset}px ${blur}px rgba(${textColor.r},${textColor.g},${textColor.b},${textColor.a})`}}>
            Preview
        </h1>
    )
};

export default TextPreview;