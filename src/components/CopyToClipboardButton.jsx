import { CopyToClipboard } from "react-copy-to-clipboard";
import Swal from 'sweetalert2';

import '../styles/components/CopyToClipboardButton.scss';


function CopyToClipboardButton ({toCopy}) {
    
    const onCopyText = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            iconColor: '#583e82',
            title: 'Generated code was copy to Clipboard',
            showConfirmButton: false,
            timer: 2000
          })
    };

    return ( 
        <CopyToClipboard text={toCopy} onCopy={onCopyText}>
            <button className="CopyToClipboardButton">Copy to Clipboard</button>
        </CopyToClipboard>
     );
}

export default CopyToClipboardButton;