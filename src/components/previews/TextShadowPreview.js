import {useSelector} from 'react-redux';

import './Previews.scss';

function TextShadowPreview() {

    const xOffset = useSelector(state => state.textShadow_xOffset);
    const yOffset = useSelector(state => state.textShadow_yOffset);
    const blur = useSelector(state => state.textShadow_blur);
    const textColor = useSelector(state => state.textShadow_textColor);
    const shadowColor = useSelector(state => state.textShadow_shadowColor);
    

    return(
        <h1 className="texShadow" style={{color: `rgba(${textColor.r},${textColor.g},${textColor.b},${textColor.a})`, textShadow: `${xOffset}px ${yOffset}px ${blur}px rgba(${shadowColor.r},${shadowColor.g},${shadowColor.b},${shadowColor.a})`}}>
            Preview
        </h1>
    )
};

export default TextShadowPreview;