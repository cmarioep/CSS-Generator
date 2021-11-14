import {DataProvider} from './Context/DataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Containers/Layout';
import BoxShadow from './Pages/Box-Shadow';
import TextShadow from './Pages/Text-Shadow';


function App() {
  return (
    <div>
      <DataProvider>
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<BoxShadow />} />
              <Route path="/text-shadow" element={<TextShadow />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </DataProvider>  
    </div>
  );
}

export default App;

