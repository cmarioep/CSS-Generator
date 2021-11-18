import Controls from '../Containers/Controls';
import InputControls from '../Containers/InputControls';
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
                <InputControls/>
            </Controls>
        </div>

    )
}


export default TextShadow;