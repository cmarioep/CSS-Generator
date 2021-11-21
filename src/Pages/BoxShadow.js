import Controls from '../Containers/Controls';
import BoxShadowControls from '../Containers/BoxShadowControls';
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
                <BoxShadowControls/>
            </Controls>
        </div>

    );
}


export default BoxShadow;