import SliderInput from '../Components/SliderInput';
import './InputControls.css';

function InputControls() {

  return (
    <div className="inputControls">
       <h1>CSS Box Shadow Generator</h1>
       <SliderInput label="x" />
       <SliderInput label="y"/>
       <SliderInput label="Blur"/>
       <SliderInput label="Spread"/>
    </div>
  );
}

export default InputControls;

