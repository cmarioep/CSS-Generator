import {useSelector} from 'react-redux';
import './GlassMorphismPreview.css';

function GlassMorphismPreview() {

    const border = useSelector(state => state.glassMorphism_border);
    const borderRadius = useSelector(state => state.glassMorphism_borderRadius);
    const blurFilter = useSelector(state => state.glassMorphism_blurFilter);
    const backgroundcolor = useSelector(state => state.glassMorphism_color);
    const opacity = useSelector(state => state.glassMorphism_opacity);

    
    return(
        <div className="glassBox" 
            style={{
                backdropFilter: `${blurFilter}px`, 
                backgroundColor: `rgba(${backgroundcolor.r},${backgroundcolor.g},${backgroundcolor.b},${opacity})`,
                borderRadius: `${borderRadius}px`,
                border: `${border}px rgba(255,255,255,0.4) solid`,
                borderBottom: `${border}px rgba(40,40,40,0.35) solid`,
                borderRight: `${border}px rgba(40,40,40,0.35) solid`
            }}>
        </div>
    )
};

export default GlassMorphismPreview;

