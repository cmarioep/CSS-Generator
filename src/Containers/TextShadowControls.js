import SliderInput from '../Components/SliderInput';
import ColorPicker from '../Components/ColorPicker';
import './InputControls.css';

function TextShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__inputs">
        <div className="inputControls__inputs__sliders">
          <SliderInput sliderType="text-shadow" label="x" />
          <SliderInput sliderType="text-shadow" label="y"/>
          <SliderInput sliderType="text-shadow" label="Blur"/>
        </div>
        <div className="inputControls__inputs__color">
          <ColorPicker colorPickerType="text-shadow"/>
        </div>
    </div>
  </div>
);
}

export default TextShadowControls;
