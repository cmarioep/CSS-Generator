import Slider from '../Components/controls/Slider';
import ColorPicker from '../Components/controls/ColorPicker';
import './InputControls.scss';

function GlassMorphismControls() {

  return (
    <div className="inputControls">
      <div className="inputControls__slider">
        <Slider sliderType="glass-morphism" label="Opacity" />
        <Slider sliderType="glass-morphism" label="Blur" />
        <Slider sliderType="glass-morphism" label="Border" />
        <Slider sliderType="glass-morphism" label="Border radius" />
      </div>
      <div className="inputControls__colorPicker">
        <ColorPicker colorPickerType="glass-morphism" label="Glass color" />
      </div>
    </div>
  );
}

export default GlassMorphismControls;