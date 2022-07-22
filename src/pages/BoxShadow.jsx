import { Controls, BoxShadowControls, Viewer } from '../containers';


import BoxShadowPreview from '../components/previews/BoxShadowPreview';
import BoxShadowGeneratedCode from '../components/generatedCode/BoxShadowGeneratedCode';

import './generalLayout.scss';


export function BoxShadow() {
    return (
        <div className="layout">
            <Controls>
                <BoxShadowControls />
            </Controls>
            <Viewer>
                <BoxShadowPreview />
                <BoxShadowGeneratedCode />
            </Viewer>
        </div>

    );
}


