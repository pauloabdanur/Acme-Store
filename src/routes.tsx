import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import Footer from './components/Footer';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/product" element={<ProductPage />}>
          <Route path=":productId" element={<ProductPage />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
