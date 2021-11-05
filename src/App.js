import Controls from './Containers/Controls';
import InputControls from './Containers/InputControls';
import Box from './Containers/Box';

import './App.css';

function App() {
  return (
    <div className="app">
        <Controls>
          <InputControls/>
        </Controls>
        <Box />      
    </div>
  );
}

export default App;
