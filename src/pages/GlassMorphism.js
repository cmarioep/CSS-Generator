import Controls from '../containers/Controls';
import GlassMorphismControls from '../containers/GlassMorphismControls';
import Viewer from '../containers/Viewer';
import GlassMorphismPreview from '../components//previews/GlassMorphismPreview';
import GlassMorphismGeneratedCode from '../components/generatedCode/GlassMorphismGeneratedCode';

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