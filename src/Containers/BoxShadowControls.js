import Slider from '../Components/controls/Slider';
import ColorPicker from '../Components/controls/ColorPicker';
import './InputControls.scss';

function BoxShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <Slider sliderType="box-shadow" label="X-Offset" />
        <Slider sliderType="box-shadow" label="Y-Offset" />
        <Slider sliderType="box-shadow" label="Blur" />
        <Slider sliderType="box-shadow" label="Spread" />
      </div>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="box-shadow" label="Shadow Color" />
      </div>
    </div>
  );
}

export default BoxShadowControls;

