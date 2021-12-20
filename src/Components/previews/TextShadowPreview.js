import {useSelector} from 'react-redux';

import './Previews.scss';

function TextShadowPreview() {

    const xOffset = useSelector(state => state.textShadow_xOffset);
    const yOffset = useSelector(state => state.textShadow_yOffset);
    const blur = useSelector(state => state.textShadow_blur);
    const textColor = useSelector(state => state.textShadow_color);
    

    return(
        <h1 className="texShadow" style={{textShadow: `${xOffset}px ${yOffset}px ${blur}px rgba(${textColor.r},${textColor.g},${textColor.b},${textColor.a})`}}>
            Preview
        </h1>
    )
};

export default TextShadowPreview;