import {useSelector} from 'react-redux';
import './Previews.scss';

function BoxShadowPreview() {

    const xOffset = useSelector(state => state.boxShadow_xOffset);
    const yOffset = useSelector(state => state.boxShadow_yOffset);
    const blur = useSelector(state => state.boxShadow_blur);
    const spread = useSelector(state => state.boxShadow_spread);
    const color = useSelector(state => state.boxShadow_color);

    
    return(
        <div className="boxShadow" 
            style={{boxShadow: `${xOffset}px ${yOffset}px ${blur}px ${spread}px rgba(${color.r},${color.g},${color.b},${color.a})`}}>
        </div>
    )
};

export default BoxShadowPreview;