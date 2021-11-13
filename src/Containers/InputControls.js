import SliderInput from '../Components/SliderInput';
import './InputControls.css';

function InputControls() {

  return (
    <div className="inputControls">
       <h1 className="inputControls__title">Box Shadow</h1>
       <SliderInput label="x" />
       <SliderInput label="y"/>
       <SliderInput label="Blur" minRange={0}/>
       <SliderInput label="Spread"/>
    </div>
  );
}

export default InputControls;

