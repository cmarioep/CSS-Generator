import Controls from './Containers/Controls';
import InputControls from './Containers/InputControls';
import Viewer from './Containers/Viewer';
import Box from './Components/Box';
import {DataProvider} from './Context/DataContext';

import './App.css';

function App() {
  return (
    <div className="app">
      <DataProvider>
        <Viewer>
          <Box />
        </Viewer>    
        <Controls>
          <InputControls/>
        </Controls>
      </DataProvider>  
    </div>
  );
}

export default App;
