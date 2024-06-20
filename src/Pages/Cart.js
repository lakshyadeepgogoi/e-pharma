import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItems from '../Component/CartProduct/CartItems';
import { FaAngleLeft } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";
import { CartContext } from '../Context/ContextProvider';
import { totalItem, totalPrice } from '../Context/CartReducer';
import axios from 'axios';

function Cart({ isLoggedIn, user }) {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [newAddress, setNewAddress] = useState('');

  const handlePlaceOrder = async () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      try {
        const products = cart.map(item => ({
          productId: item.id || item._id,
          quantity: item.quantity,
          price: item.price
        }));
        
        const orderData = {
          userId: user._id, // Assuming `user` prop has the user's ID
          products,
          shippingAddress: address,
          totalAmount: totalPrice(cart)
        };

        const response = await axios.post('/api/orders/create', orderData);
        console.log('Order placed successfully:', response.data);
        // Clear the cart or navigate to a confirmation page
      } catch (error) {
        console.error('Error placing order:', error);
      }
    }
  };

  const handleAddressChange = (e) => {
    setNewAddress(e.target.value);
  };



  const updateAddress = () => {
    if (newAddress.trim()) {
      setAddress(newAddress);
      setNewAddress('');
    }
  };

  return (
    <div className='md:w-4/5 w-full p-4 flex flex-col mx-auto my-5'>
      {/* address section */}
      <div className='w-full bg-[#FEFBF3] h-16 Border-slate-200 my-4 flex flex-row justify-between border-2 rounded-md py-2 px-4 items-center'>
        <input 
          className='items-center text-xl w-full h-full' 
          placeholder='Enter address' 
          value={newAddress}
          onChange={handleAddressChange}
        />
        <div className='hidden md:block w-44 h-full place-content-center px-4 border-l-2'>
          <button 
            className='text-center text-[#F2971F] text-lg flex flex-row gap-2 font-semibold items-center' 
            onClick={updateAddress}
          >
            <span>Add Address</span>
            <MdAddLocationAlt className='text-3xl' />
          </button>
        </div>
        <div className='block md:hidden'>
          <button className='text-3xl p-2' onClick={updateAddress}>
            <MdAddLocationAlt />
          </button>
        </div>
      </div>
      <p className='text-xl my-2'>Current Address: {address}</p>

      {/* product checkout details */}
      <div className='my-10 w-full flex md:flex-row flex-col gap-6'>
        {/* left side */}
        <div className='md:w-3/5 w-full border-2'>
          <Link to="/">
            <div className='ml-4 pt-4 flex flex-row md:text-xl text-lg items-center'>
              <FaAngleLeft />
              <p>Back to Shop</p>
            </div>
          </Link>

          <div className='w-full md:p-10 p-4'>
            <div className='flex flex-row justify-between my-4 text-[#9D9D9D]'>
              <div>My Orders</div>
              <div>Total Items: {totalItem(cart)}</div>
            </div>

            <div className='md:px-4 w-full my-2'>
              {cart.map((product) => (
                <CartItems key={product.id || product._id} product={product} />
              ))}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className='md:w-[35%] w-full border-2 flex flex-col p-4'>
          {/* coupons code */}
          <div className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Discount</label>
            <input 
              type='text' 
              placeholder='Enter your promo code' 
              className='border-2 border-gray-300 rounded-md h-8 p-4' 
            />
          </div>
          {/* total price */}
          <div className='my-6 flex flex-col'>
            <p className='text-lg font-semibold'>Price details</p>
            <div className='bg-[#f5f4f4] p-3 mt-2 mb-6 flex flex-col gap-3'>
              {/* subtotal */}
              <div className='flex flex-row justify-between items-center'>
                <div className='text-gray-700 text-base'>Subtotal</div>
                <div>{totalPrice(cart)}</div>
              </div>
              {/* shipping charge */}
              <div className='flex flex-row justify-between items-center'>
                <div className='text-gray-700 text-base'>Shipping Fee</div>
                <div>20</div>
              </div>
              {/* tax */}
              <div className='flex flex-row justify-between items-center'>
                <div className='text-gray-700 text-base'>Tax 15%</div>
                <div>15</div>
              </div>
            </div>
            {/* buttons */}
            <button
              className='bg-blue-500 h-10 rounded-lg w-full text-white text-lg font-medium'
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
