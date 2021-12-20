import SliderInput from '../Components/SliderInput';
import ColorPicker from '../Components/ColorPicker';
import './InputControls.scss';

function TextShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <SliderInput sliderType="text-shadow" label="X-Offset" />
        <SliderInput sliderType="text-shadow" label="Y-Offset" />
        <SliderInput sliderType="text-shadow" label="Blur" />
      </div>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="text-shadow" label="text Color" />
        <ColorPicker colorPickerType="text-shadow" label="Shadow Color" />
      </div>
    </div>
  );
}

export default TextShadowControls;
