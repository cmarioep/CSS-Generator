import Controls from '../Containers/Controls';
import InputControls from '../Containers/InputControls';
import Viewer from '../Containers/Viewer';

import './generalLayout.css';


function TextShadow() {
    return ( 
        <div className="layout">
            <Viewer>
                <h1>Texto de Prueba</h1>
            </Viewer>
            <Controls>
                <InputControls/>
            </Controls>
        </div>

    );
}


export default TextShadow;