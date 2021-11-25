import Controls from '../Containers/Controls';
import TextShadowControls from '../Containers/TextShadowControls';
import Viewer from '../Containers/Viewer';
import TextShadowPreview from '../Components/TextShadowPreview';

import './generalLayout.css';


function TextShadow() {
    return ( 
        <div className="layout">
            <Controls>
                <TextShadowControls/>
            </Controls>
            <Viewer>
                <TextShadowPreview />
            </Viewer>
        </div>

    )
}


export default TextShadow;