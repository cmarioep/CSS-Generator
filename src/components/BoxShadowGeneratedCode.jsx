import { useSelector } from 'react-redux';

import CopyToClipboardButton from './CopyToClipboardButton';


import '../styles/components/GeneratedCode.scss';


const BoxGeneratedCode = () => {

    const xOffset = useSelector(state => state.boxShadow_xOffset);
    const yOffset = useSelector(state => state.boxShadow_yOffset);
    const blur = useSelector(state => state.boxShadow_blur);
    const spread = useSelector(state => state.boxShadow_spread);
    const color = useSelector(state => state.boxShadow_color);

    const generatedCode = `box-shadow: ${xOffset}px ${yOffset}px ${blur}px ${spread}px rgba(${color.r},${color.g},${color.b},${color.a});`


    return (
        <div className="generatedCode">
            <input className="generatedCode__code" type="textarea" value={generatedCode} readOnly />
            <CopyToClipboardButton toCopy={generatedCode} />
        </div>
    )
};

export default BoxGeneratedCode;