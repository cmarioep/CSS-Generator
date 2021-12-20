import { useSelector } from 'react-redux';

import CopyToClipboardButton from '../buttons/CopyToClipboardButton';

import '../buttons/CopyToClipboardButton.css';
import './GeneratedCode.scss';


const BoxGeneratedCode = () => {

    const xOffset = useSelector(state => state.textShadow_xOffset);
    const yOffset = useSelector(state => state.textShadow_yOffset);
    const blur = useSelector(state => state.textShadow_blur);
    const color = useSelector(state => state.textShadow_shadowColor);

    const generatedCode = `text-shadow: ${xOffset}px ${yOffset}px ${blur}px rgba(${color.r},${color.g},${color.b},${color.a});`


    return (
        <div className="generatedCode">
            <input className="generatedCode__code" type="textarea" value={generatedCode} readOnly />
            <CopyToClipboardButton toCopy={generatedCode} />
        </div>
    )
};

export default BoxGeneratedCode;