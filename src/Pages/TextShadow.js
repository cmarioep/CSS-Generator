import Controls from '../Containers/Controls';
import TextShadowControls from '../Containers/TextShadowControls';
import Viewer from '../Containers/Viewer';
import TextShadowPreview from '../Components//previews/TextShadowPreview';
import TextShadowGeneratedCode from '../Components/generatedCode/TextShadowGeneratedCode';

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