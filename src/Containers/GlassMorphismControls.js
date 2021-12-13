import SliderInput from '../Components/SliderInput';
import ColorPicker from '../Components/ColorPicker';
import './InputControls.css';

function GlassMorphismControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__inputs">
        <div className="inputControls__inputs__sliders">
          <SliderInput sliderType="glass-morphism" label="Opacity" />
          <SliderInput sliderType="glass-morphism" label="Blur"/>
          <SliderInput sliderType="glass-morphism" label="Border"/>
          <SliderInput sliderType="glass-morphism" label="Border radius"/>
        </div>
        <div className="inputControls__inputs__color">
          <ColorPicker colorPickerType="glass-morphism"/>
        </div>
    </div>
  </div>
);
}

export default GlassMorphismControls;