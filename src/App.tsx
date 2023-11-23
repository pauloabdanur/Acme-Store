import { AuthProvider } from './contexts/Auth/AuthProvider';
import { ProductProvider } from './contexts/Products/ProductProvider';
import { Router } from './routes';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router />
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
