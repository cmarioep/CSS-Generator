import Slider from '../components/Slider';
import ColorPicker from '../components/ColorPicker';

import '../styles/containers/InputControls.scss';


export function TextShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <Slider sliderType="text-shadow" label="X-Offset" />
        <Slider sliderType="text-shadow" label="Y-Offset" />
        <Slider sliderType="text-shadow" label="Blur" />
      </div>
      <hr/>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="text-color" label="Text Color" />
        <ColorPicker colorPickerType="text-shadow" label="Shadow Color" />
      </div>
    </div>
  );
}


