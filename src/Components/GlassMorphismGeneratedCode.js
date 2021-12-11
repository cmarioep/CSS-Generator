import { useSelector } from 'react-redux';

import CopyToClipboardButton from '../Components/CopyToClipboardButton';

import './CopyToClipboardButton.css';
import './ShadowGeneratedCode.css';


const GlassMorphismGeneratedCode = () => {

    const opacity = useSelector(state => state.glassMorphism_opacity);
    const blurFilter = useSelector(state => state.glassMorphism_blurFilter);
    const border = useSelector(state => state.glassMorphism_border);
    const borderRadius = useSelector(state => state.glassMorphism_borderRadius);
    const backgroundcolor = useSelector(state => state.glassMorphism_color);

    const generatedCode = `background-color: rgba(${backgroundcolor.r},${backgroundcolor.g},${backgroundcolor.b},${opacity});\nbackdrop-filter: blur(${blurFilter}px);\nborder: ${border}px solid rgba(255,255,255,0.4);\nborder-radius: ${borderRadius}px;\nborder-bottom: ${border}px solid rgba(40,40,40,0.35);\nborder-right: ${border}px solid rgba(40,40,40,0.35);`


    return (
        <div className="shadowGenerated">
            <textarea className="shadowGenerated__code shadowGenerated__code--texarea" rows={6} value={generatedCode} readOnly />
            <CopyToClipboardButton toCopy={generatedCode} />
        </div>
    )
};

export default GlassMorphismGeneratedCode;