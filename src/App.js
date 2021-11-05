import Controls from './Containers/Controls';
import InputControls from './Containers/InputControls';
import Viewer from './Containers/Viewer';
import Box from './Components/Box';

import './App.css';

function App() {
  return (
    <div className="app">
        <Controls>
          <InputControls/>
        </Controls>
        <Viewer>
          <Box />
        </Viewer>      
    </div>
  );
}

export default App;
