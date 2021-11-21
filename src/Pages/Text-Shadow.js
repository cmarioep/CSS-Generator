import Controls from '../Containers/Controls';
import TextShadowControls from '../Containers/TextShadowControls';
import Viewer from '../Containers/Viewer';
import TextPreview from '../Components/TextPreview';

import './generalLayout.css';


function TextShadow() {
    return ( 
        <div className="layout">
            <Viewer>
                <TextPreview />
            </Viewer>
            <Controls>
                <TextShadowControls/>
            </Controls>
        </div>

    )
}


export default TextShadow;