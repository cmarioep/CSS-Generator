import SliderInput from '../Components/SliderInput';
import ColorPicker from '../Components/ColorPicker';
import './InputControls.scss';

function GlassMorphismControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <SliderInput sliderType="glass-morphism" label="Opacity" />
        <SliderInput sliderType="glass-morphism" label="Blur" />
        <SliderInput sliderType="glass-morphism" label="Border" />
        <SliderInput sliderType="glass-morphism" label="Border radius" />
      </div>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="glass-morphism" label="Glass color" />
      </div>
    </div>
  );
}

export default GlassMorphismControls;