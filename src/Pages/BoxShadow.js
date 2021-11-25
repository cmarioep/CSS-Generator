import Controls from '../Containers/Controls';
import BoxShadowControls from '../Containers/BoxShadowControls';
import Viewer from '../Containers/Viewer';
import BoxShadowPreview from '../Components/BoxShadowPreview';
import BoxShadowGeneratedCode from '../Components/BoxShadowGeneratedCode';

import './generalLayout.css';


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