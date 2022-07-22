import Controls from '../containers/Controls';
import BoxShadowControls from '../containers/BoxShadowControls';
import Viewer from '../containers/Viewer';
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


