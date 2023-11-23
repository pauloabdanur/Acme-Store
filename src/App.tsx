import { AuthProvider } from './contexts/Auth/AuthProvider';
import { ProductProvider } from './contexts/Products/ProductProvides';
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
