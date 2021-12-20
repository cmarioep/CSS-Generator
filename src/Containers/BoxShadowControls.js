import SliderInput from '../Components/SliderInput';
import ColorPicker from '../Components/ColorPicker';
import './InputControls.scss';

function BoxShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <SliderInput sliderType="box-shadow" label="X-Offset" />
        <SliderInput sliderType="box-shadow" label="Y-Offset" />
        <SliderInput sliderType="box-shadow" label="Blur" />
        <SliderInput sliderType="box-shadow" label="Spread" />
      </div>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="box-shadow" label="Shadow Color" />
      </div>
    </div>
  );
}

export default BoxShadowControls;

