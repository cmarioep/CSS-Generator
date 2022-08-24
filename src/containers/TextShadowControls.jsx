import Slider from '../components/Slider';
import ColorPicker from '../components/ColorPicker';

import '../styles/containers/InputControls.scss';


export function TextShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <Slider sliderType="textshadow" label="XOffset" />
        <Slider sliderType="textshadow" label="YOffset" />
        <Slider sliderType="textshadow" label="Blur" />
      </div>
      <hr/>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="textcolor" label="Text Color" />
        <ColorPicker colorPickerType="textshadow" label="Shadow Color" />
      </div>
    </div>
  );
}


