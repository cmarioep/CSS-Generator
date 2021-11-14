import {useSelector} from 'react-redux';
import './Box.css';

function Box() {

    const x = useSelector(state => state.x);
    const y = useSelector(state => state.y);
    const blur = useSelector(state => state.blur);
    const spread = useSelector(state => state.spread);
    const color = useSelector(state => state.color);

    return(
        <div className="box" 
            style={{boxShadow: `${x}px ${y}px ${blur}px ${spread}px rgba(${color.r},${color.g},${color.b},${color.a})`}}>
                <input type="text"/>
        </div>
    )
};

export default Box;