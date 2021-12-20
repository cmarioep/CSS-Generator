import Slider from '../Components/controls/Slider';
import ColorPicker from '../Components/controls/ColorPicker';
import './InputControls.scss';

function TextShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <Slider sliderType="text-shadow" label="X-Offset" />
        <Slider sliderType="text-shadow" label="Y-Offset" />
        <Slider sliderType="text-shadow" label="Blur" />
      </div>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="text-shadow" label="text Color" />
        <ColorPicker colorPickerType="text-shadow" label="Shadow Color" />
      </div>
    </div>
  );
}

export default TextShadowControls;
