import {useSelector} from 'react-redux';

function Text() {

    const xOffset = useSelector(state => state.text_xOffset);
    const yOffset = useSelector(state => state.text_yOffset);
    const blur = useSelector(state => state.text_blur);
    const color = useSelector(state => state.text_color);

    return(
        <h1 style={{textShadow: `${xOffset}px ${yOffset}px ${blur}px rgba(${color.r},${color.g},${color.b},${color.a})`}}>
            Preview
        </h1>
    )
};

export default Text;