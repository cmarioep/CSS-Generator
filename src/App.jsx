import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './containers';

import { BoxShadow, TextShadow, GlassMorphism } from './pages';



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

