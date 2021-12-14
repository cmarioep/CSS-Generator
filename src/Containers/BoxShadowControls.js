import SliderInput from '../Components/SliderInput';
import ColorPicker from '../Components/ColorPicker';
import './InputControls.css';

function BoxShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__inputs">
        <div className="inputControls__inputs__sliders">
          <SliderInput sliderType="box-shadow" label="X-Offset" />
          <SliderInput sliderType="box-shadow" label="Y-Offset"/>
          <SliderInput sliderType="box-shadow" label="Blur"/>
          <SliderInput sliderType="box-shadow" label="Spread"/>
        </div>
        <div className="inputControls__inputs__color">
          <ColorPicker colorPickerType="box-shadow" label="Shadow Color"/>
        </div>
    </div>
  </div>
);
}

export default BoxShadowControls;

