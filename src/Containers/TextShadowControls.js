import SliderInput from '../Components/SliderInput';
import ColorPicker from '../Components/ColorPicker';
import './InputControls.css';

function TextShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__inputs">
        <div className="inputControls__inputs__sliders">
          <SliderInput sliderType="text-shadow" label="X-Offset" />
          <SliderInput sliderType="text-shadow" label="Y-Offset"/>
          <SliderInput sliderType="text-shadow" label="Blur"/>
        </div>
        <div className="inputControls__inputs__color">
          <ColorPicker colorPickerType="text-shadow" label="Shadow Color"/>
        </div>
    </div>
  </div>
);
}

export default TextShadowControls;
