
import { CustomerProvider } from './context/CustomerContext';
import AppRoutes from './routes/Routes';

function App() {
    return (
        <CustomerProvider>
            <AppRoutes />
        </CustomerProvider>
    );
}

export default App;
