import { useContext } from 'react';
import { ProductContext } from '../../contexts/Products/ProductContext';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails';
import OtherProducts from '../../components/OtherProducts';

const ProductPage = () => {
  const { getProductById } = useContext(ProductContext);
  const { productId } = useParams();
  const selectedProduct = getProductById(Number(productId));

  return (
    <div>
      <ProductDetails product={selectedProduct!} />
      <OtherProducts />
    </div>
  );
};

export default ProductPage;
