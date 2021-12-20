import Controls from '../Containers/Controls';
import BoxShadowControls from '../Containers/BoxShadowControls';
import Viewer from '../Containers/Viewer';
import BoxShadowPreview from '../Components/previews/BoxShadowPreview';
import BoxShadowGeneratedCode from '../Components/generatedCode/BoxShadowGeneratedCode';

import './generalLayout.scss';


function BoxShadow() {
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


export default BoxShadow;