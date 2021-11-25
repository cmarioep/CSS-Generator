import Controls from '../Containers/Controls';
import GlassMorphismControls from '../Containers/GlassMorphismControls';
import Viewer from '../Containers/Viewer';
import GlassMorphismPreview from '../Components/GlassMorphismPreview';

import './generalLayout.css';


function GlassMorphism() {
    return (
        <div className="layout">
            <Controls>
                <GlassMorphismControls />
            </Controls>
            <Viewer>
                <GlassMorphismPreview />
            </Viewer>
        </div>

    )
}


export default GlassMorphism;