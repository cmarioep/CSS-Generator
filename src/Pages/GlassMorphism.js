import Controls from '../Containers/Controls';
import GlassMorphismControls from '../Containers/GlassMorphismControls';
import Viewer from '../Containers/Viewer';
import BoxShadowPreview from '../Components/BoxShadowPreview';

import './generalLayout.css';


function GlassMorphism() {
    return (
        <div className="layout">
            <Controls>
                <GlassMorphismControls />
            </Controls>
            <Viewer>
                <BoxShadowPreview />
            </Viewer>
        </div>

    )
}


export default GlassMorphism;