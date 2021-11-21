import SliderInput from '../Components/SliderInput';
import ColorPicker from '../Components/ColorPicker';
import './InputControls.css';

function BoxShadowControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__inputs">
        <div className="inputControls__inputs__sliders">
          <SliderInput sliderType="box-shadow" label="x" />
          <SliderInput sliderType="box-shadow" label="y"/>
          <SliderInput sliderType="box-shadow" label="Blur"/>
          <SliderInput sliderType="box-shadow" label="Spread"/>
        </div>
        <div className="inputControls__inputs__color">
          <ColorPicker/>
        </div>
    </div>
  </div>
);
}

export default BoxShadowControls;

