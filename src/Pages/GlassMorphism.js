import Controls from '../Containers/Controls';
import GlassMorphismControls from '../Containers/GlassMorphismControls';
import Viewer from '../Containers/Viewer';
import GlassMorphismPreview from '../Components//previews/GlassMorphismPreview';
import GlassMorphismGeneratedCode from '../Components/generatedCode/GlassMorphismGeneratedCode';

import './generalLayout.scss';


function GlassMorphism() {
    return (
        <div className="layout layout--glassBackground">
            <Controls>
                <GlassMorphismControls />
            </Controls>
            <Viewer>
                <GlassMorphismPreview />
                <GlassMorphismGeneratedCode />
            </Viewer>
        </div>

    )
}

export default GlassMorphism;