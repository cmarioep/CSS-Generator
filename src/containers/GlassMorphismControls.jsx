import Slider from '../components/Slider';
import ColorPicker from '../components/ColorPicker';

import '../styles/containers/InputControls.scss';


export function GlassMorphismControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <Slider sliderType="glassmorphism" label="Opacity" />
        <Slider sliderType="glassmorphism" label="Blur" />
        <Slider sliderType="glassmorphism" label="Border" />
        <Slider sliderType="glassmorphism" label="radius" />
      </div>
      <hr/>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="glassmorphism" label="Glass color" />
      </div>
    </div>
  );
}

