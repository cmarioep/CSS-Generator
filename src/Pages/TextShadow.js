import Controls from '../Containers/Controls';
import TextShadowControls from '../Containers/TextShadowControls';
import Viewer from '../Containers/Viewer';
import TextShadowPreview from '../Components/TextShadowPreview';
import TextShadowGeneratedCode from '../Components/TextShadowGeneratedCode';

import './generalLayout.css';


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