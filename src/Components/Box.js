import {useSelector} from 'react-redux';
import './Box.css';

function Box() {

    const x = useSelector(state => state.x);
    const y = useSelector(state => state.y);
    const blur = useSelector(state => state.blur);
    const spread = useSelector(state => state.spread);

    const color = 'blue';


    return(
        <div className="box" 
            style={{boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color} `,}}>
        </div>
    )
};

export default Box;