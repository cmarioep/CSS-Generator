import {useSelector} from 'react-redux';

import './TextPreview.css'

function TextPreview() {

    const xOffset = useSelector(state => state.text_xOffset);
    const yOffset = useSelector(state => state.text_yOffset);
    const blur = useSelector(state => state.text_blur);
    const color = useSelector(state => state.text_color);

    return(
        <h1 className="textPreview" style={{textShadow: `${xOffset}px ${yOffset}px ${blur}px rgba(${color.r},${color.g},${color.b},${color.a})`}}>
            Preview
        </h1>
    )
};

export default TextPreview;