import {useSelector} from 'react-redux';
import './Box.css';

function Box() {

    const counter = useSelector(state => state.x);

    const y = 5;
    const blur = 5;
    const spread = 5;
    const color = "blue";

    return(
        <div className="box" 
            style={{boxShadow: `${counter}px ${y}px ${blur}px ${spread}px ${color} `,}}>
        </div>
    )
};

export default Box;