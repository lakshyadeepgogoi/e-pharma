import React, { useEffect, useState } from 'react'
import HomeSectionCard from './HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from 'axios';


function HomeSectionCarosal() {

  const [loading, setLoading] = useState(true);
  const [Product, setProduct] = useState([])

  useEffect(() => {

    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('http://localhost:4000/api/products');
        setProduct(response);
        console.log(Product);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);



    
const responsive = {
    0: { items: 1,},
    608: { items: 2 },
    1024: { items: 3 },
    1524:{items: 4},
};

const items = Product.map((Product) => {
  console.log("Product item:", Product); // Log each product
  return (
    <HomeSectionCard
      key={Product.id} // Assuming each product has a unique 'id'
      name={Product.title}
      price={Product.discountFees}
      photos = {Product.images}
    />
  );
});
   
  return (
    <div className='relative px-4 lg:px-8 flex flex-row'>
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
        
        />
        
      
    </div>
  )
}

export default HomeSectionCarosal