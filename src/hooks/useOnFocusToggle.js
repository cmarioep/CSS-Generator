import { useEffect, useRef, useState } from "react";


export const useOnFocusToggle = () => {

    // Component instance’s DOM reference
    let focusElement = useRef(null);

    // Hadler to show or hide the colorPicker
    const [onFocus, setOnFocus] = useState(false);


    const onFocusHandler = () => {
        setOnFocus(!onFocus);
    }


    useEffect(() => {

        // If the color picker is open and the clicked target is not within the picker, then close the picker        
        const clickOutsideHandler = (event) => {
            if (focusElement.current && !focusElement.current.contains(event.target)) {
                setOnFocus(false);
            }
        };

        // Bind the event listener
        document.addEventListener('click', clickOutsideHandler);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('click', clickOutsideHandler);
        };

    }, []);


    return {
        onFocus,
        onFocusHandler,
        focusElement
    }

}

