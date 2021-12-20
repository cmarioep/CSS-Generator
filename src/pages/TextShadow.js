import Controls from '../containers/Controls';
import TextShadowControls from '../containers/TextShadowControls';
import Viewer from '../containers/Viewer';
import TextShadowPreview from '../components//previews/TextShadowPreview';
import TextShadowGeneratedCode from '../components/generatedCode/TextShadowGeneratedCode';

import './generalLayout.scss';


function TextShadow() {
    return ( 
        <div className="layout">
            <Controls>
                <TextShadowControls/>
            </Controls>
            <Viewer>
                <TextShadowPreview />
                <TextShadowGeneratedCode />
            </Viewer>
        </div>

    )
}


export default TextShadow;