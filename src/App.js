import {DataProvider} from './Context/DataContext';
import Layout from './Containers/Layout';
import BoxShadow from './Pages/Box-Shadow';


function App() {
  return (
    <div>
      <DataProvider>
        <Layout>
          <BoxShadow />
        </Layout>
      </DataProvider>  
    </div>
  );
}

export default App;

