import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Containers/Layout';
import BoxShadow from './Pages/BoxShadow';
import TextShadow from './Pages/Text-Shadow';
import GlassMorphism from './Pages/Glass-Morphism';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<BoxShadow />} />
              <Route path="/text-shadow" element={<TextShadow />} />
              <Route path="/glass" element={<GlassMorphism />} />
            </Routes>
          </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;

