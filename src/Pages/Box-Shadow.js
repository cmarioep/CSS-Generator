import Controls from '../Containers/Controls';
import InputControls from '../Containers/InputControls';
import Viewer from '../Containers/Viewer';
import Box from '../Components/Box';

import './generalLayout.css';


function BoxShadow() {
    return ( 
        <div className="layout">
            <Viewer>
                <Box />
            </Viewer>
            <Controls>
                <InputControls/>
            </Controls>
        </div>

    );
}


export default BoxShadow;