import { Controls, BoxShadowControls, Viewer } from '../containers';


import BoxShadowPreview from '../components/BoxShadowPreview';
import BoxShadowGeneratedCode from '../components/BoxShadowGeneratedCode';

import '../styles/generalLayout.scss';


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


