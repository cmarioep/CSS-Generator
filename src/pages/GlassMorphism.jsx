import { Controls, GlassMorphismControls, Viewer } from '../containers';


import GlassMorphismPreview from '../components/GlassMorphismPreview';
import GlassMorphismGeneratedCode from '../components/GlassMorphismGeneratedCode';

import '../styles/generalLayout.scss';


export function GlassMorphism() {
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

