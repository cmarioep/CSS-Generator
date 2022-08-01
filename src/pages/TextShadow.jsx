import { Controls, TextShadowControls, Viewer } from '../containers';


import TextShadowPreview from '../components/previews/TextShadowPreview';
import TextShadowGeneratedCode from '../components/generatedCode/TextShadowGeneratedCode';

import '../styles/generalLayout.scss';


export function TextShadow() {
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


