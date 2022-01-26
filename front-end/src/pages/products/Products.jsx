import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import status from '../../helpers/status';
import Header from '../../components/header/Header';
import ProductCard from './ProductCard';
import getLocalStorage from '../../helpers/getLocalStorage';

const PRODUCTS_URL = 'http://localhost:3001/products';

function Products() {
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(PRODUCTS_URL, {
          headers: {
            authorization: getLocalStorage('user').token,
          },
        });

        if (res.status === status.OK) setProducts(res.data);
      } catch (err) {
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <div>
        { products.map((product, i) => (
          <ProductCard
            product={ product }
            key={ i }
          />))}
      </div>
    </div>
  );
}

export default Products;
