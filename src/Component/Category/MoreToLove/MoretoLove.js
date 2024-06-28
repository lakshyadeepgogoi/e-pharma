import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductShort from './ProductShort';

function MoretoLove() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get('http://localhost:4000/api/products');
        setProducts(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // Function to get a random subset of products
  const getRandomProducts = (items, limit) => {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  };

  const randomProducts = getRandomProducts(products, 8); // Adjust the number 5 to limit the number of products shown

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='md:w-full h-max flex flex-wrap w-[90%] mb-6 mx-auto'>
      {randomProducts.map((product) => (
        <ProductShort
          key={product.id} // Assuming 'id' is a unique identifier for each product
          name={product.title}
          LastPrice={product.regularFees}
          photos={product.images}
          firstPrice={product.discountFees}
        />
      ))}
    </div>
  );
}

export default MoretoLove;
