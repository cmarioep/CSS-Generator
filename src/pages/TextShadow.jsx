import { Controls, TextShadowControls, Viewer } from '../containers';


import TextShadowPreview from '../components/TextShadowPreview';
import TextShadowGeneratedCode from '../components/TextShadowGeneratedCode';

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


