import { BrowserRouter } from 'react-router-dom';
import CustomerContainer from './components/CustomerContainer';
import AppRoute from './Route';
 function App() {
  return (
       <>
      <BrowserRouter>
      <AppRoute/>
      </BrowserRouter>
        
       </>
  );
}
export default App;