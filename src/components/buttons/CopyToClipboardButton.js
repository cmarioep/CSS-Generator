import { CopyToClipboard } from "react-copy-to-clipboard";

import './CopyToClipboardButton.css';

function CopyToClipboardButton (props) {
    
    const onCopyText = () => {
        alert("Generated Code was copy to Clipboard");
    };

    return ( 
        <CopyToClipboard text={props.toCopy} onCopy={onCopyText}>
            <button className="CopyToClipboardButton">Copy to Clipboard</button>
        </CopyToClipboard>
     );
}

export default CopyToClipboardButton;