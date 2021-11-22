import Controls from '../Containers/Controls';
import BoxShadowControls from '../Containers/BoxShadowControls';
import Viewer from '../Containers/Viewer';
import Box from '../Components/Box';
import BoxGeneratedCode from '../Components/BoxGeneratedCode';

import './generalLayout.css';


function BoxShadow() {
    return ( 
        <div className="layout">
            <Controls>
                <BoxShadowControls/>
            </Controls>
            <Viewer>
                <Box />
                <BoxGeneratedCode />
            </Viewer>
        </div>

    );
}


export default BoxShadow;