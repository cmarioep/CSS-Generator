import Controls from '../Containers/Controls';
import GlassMorphismControls from '../Containers/GlassMorphismControls';
import Viewer from '../Containers/Viewer';
import Box from '../Components/Box';

import './generalLayout.css';


function GlassMorphism() {
    return ( 
        <div className="layout">
            <Controls>
                <GlassMorphismControls/>
            </Controls>
            <Viewer>
                <Box />
            </Viewer>
        </div>

    )
}


export default GlassMorphism;