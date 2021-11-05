import './Box.css';

function Box() {

    const x = 5;
    const y = 5;
    const blur = 5;
    const spread = 5;
    const color = "blue";

    return(
        <div className="box" 
            style={{boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color} `,}}>
        </div>
    )
};

export default Box;