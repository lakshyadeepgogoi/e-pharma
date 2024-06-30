import React, { useEffect, useState } from "react";
import Product1 from "../Assets/product_image/Product1.png";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ProductShort from "../Category/MoreToLove/ProductShort";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import FormatPrice from "../Helper/FormatPrice";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [productRecommed, setProductRecommed] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const quantity = 1;





  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`http://localhost:4000/api/products/${id}`);
        setProduct(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: otherProduct } = await axios.get('http://localhost:4000/api/products');
        setProductRecommed(otherProduct);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  

  const addToCart = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      const response = await axios.post(
        'http://localhost:4000/api/cart/add', // Replace with your backend URL
        { productId: id, quantity: quantity || 1 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };



  // Function to get a random subset of products
  const getRandomProducts = (items, limit) => {
    if (!Array.isArray(items)) {
      return [];
    }
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  };

  const randomProducts = getRandomProducts(productRecommed, 8); // Adjust the number 8 to limit the number of products shown

  return (
    <div className="p-2 md:px-0 mx-auto w-full md:w-[87%] flex flex-col h-max my-10">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* heading */}
          <div className="flex flex-col gap-1 mb-4 p-2">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-[#686363]">{product.category}</p>
          </div>
          {/* Product details */}
          <div className="w-full flex flex-col sm:flex-row h-max gap-4 mt-4">
            {/* image section */}
            <div className="w-[90%] mx-auto md:w-[50%] h-[400px] md:h-[500px] bg-[#F8F8F8]">
              <img
                src={product.images && product.images.length > 0 ? product.images[0] : Product1}
                alt="productImage"
                className="w-full h-full"
              />
            </div>
            {/* product ordering function */}
            <div className="md:pl-8 p-4 w-full md:w-[50%]">
              {/* price */}
              <div className="flex flex-row justify-between border-b-2">
                <div className="flex flex-row gap-4 items-baseline h-20">
                  <div className="text-xl text-[#090F47] opacity-75 line-through">Rs <FormatPrice price={product.regularFees}/></div>
                  <div className="text-4xl font-bold text-[#090F47] leading-10">RS.<FormatPrice price={product.discountFees}/></div>
                </div>
                <div>
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} className="text-2xl md:mr-6" />
                </div>
              </div>
              {/* package details */}
              <div className="mt-">
              <div className="my-4">weight: {product.weight}gm</div>
                <ul className="space-y-2 text-gray-400">
                  <li>*This product cannot be returned for a refund or exchange.</li>
                  <li>* Country of Origin: India</li>
                  <li>* Delivery charges if applicable will be applied at checkout</li>
                </ul>
              </div>
              {/* buy buttons */}
              <div className="mt-12 p-4 flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <button className="w-80 md:w-52 h-14 rounded-lg bg-[#7D8CFF] text-xl hover:bg-[#4B5DE7] font-semibold" 
                  onClick={addToCart}>
                    Add to bag 
                    <ShoppingCartOutlinedIcon />
                  </button>
              </div>
            </div>
          </div>
          {/* description */}
          <div className="mt-8 p-2">
            <div>
              <ul className="hidden md:flex flex-row gap-12 items-center justify-center leading-8 text-xl border-t-2 border-b-2 border-gray-200 my-6">
                <li>PRODUCT DETAIL</li>
                <li>SAFETY ADVICE</li>
                <li>FAQ</li>
                <li>PRODUCT SUBSTITUTES</li>
                <li>CUSTOMERS ALSO BOUGHT</li>
              </ul>
              <div className="p-2 flex flex-col gap-2">
                <h1 className="text-xl font-semibold">PRODUCT DETAIL</h1>
                <div className="text-[#090F47] opacity-55">
                  {product.description}
                </div>
              </div>
            </div>
          </div>
          {/* more to love */}
          <div className="flex flex-col gap-4 my-10 p-4">
            <p className="text-3xl font-semibold">Product Substitutes</p>
            <div className="flex flex-wrap">
              {randomProducts.map((productRecommed) => (
                <ProductShort
                  key={productRecommed.id} // Assuming 'id' is a unique identifier for each product
                  name={productRecommed.title}
                  LastPrice={productRecommed.regularFees}
                  photos={productRecommed.images}
                  firstPrice={productRecommed.discountFees}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
