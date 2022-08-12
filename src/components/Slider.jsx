import { useSliderBehavior } from '../hooks/useSliderBehavior';


import '../styles/components/Slider.scss';


function Slider( { label, sliderType } ) {


  const { setBehavior, currentValue, minValue, maxValue, maxStep } = useSliderBehavior(label, sliderType);
  

  return (
    <div className="slider">
      <span className="slider__label"> {label}: </span>
      <input type="range" className="slider__range" min={minValue} max={maxValue} step={maxStep} value={currentValue} onChange={setBehavior} />
      <input type="number" className="slider__number" min={minValue} max={maxValue} step={maxStep} value={currentValue} onChange={setBehavior} />
    </div>
  );
}

export default Slider;