import Controls from '../Containers/Controls';
import BoxShadowControls from '../Containers/BoxShadowControls';
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
                <BoxShadowControls/>
            </Controls>
        </div>

    )
}


export default TextShadow;