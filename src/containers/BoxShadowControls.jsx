import Slider from '../components/controls/Slider';
import ColorPicker from '../components/controls/ColorPicker';

import '../styles/containers/InputControls.scss';


export function BoxShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <Slider sliderType="box-shadow" label="X-Offset" />
        <Slider sliderType="box-shadow" label="Y-Offset" />
        <Slider sliderType="box-shadow" label="Blur" />
        <Slider sliderType="box-shadow" label="Spread" />
      </div>
      <hr/>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="box-shadow" label="Shadow Color" />
      </div>
    </div>
  );
}



