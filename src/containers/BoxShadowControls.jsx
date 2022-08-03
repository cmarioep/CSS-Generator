import Slider from '../components/Slider';
import ColorPicker from '../components/ColorPicker';

import '../styles/containers/InputControls.scss';


export function BoxShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <Slider sliderType="boxshadow" label="XOffset" />
        <Slider sliderType="boxshadow" label="YOffset" />
        <Slider sliderType="boxshadow" label="Blur" />
        <Slider sliderType="boxshadow" label="Spread" />
      </div>
      <hr/>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="box-shadow" label="Shadow Color" />
      </div>
    </div>
  );
}



