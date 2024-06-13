import React from "react";
import Product1 from "../Assets/product_image/Product1.png";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import ProductShort from "../Category/MoreToLove/ProductShort";
import { NavLink } from "react-router-dom";








function ProductDetails() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="md:px-0 mx-auto md:w-[87%] flex flex-col  h-max my-10 ">
      {/* heading */}
      <div className="flex flex-col gap-1 mb-4">
        <h1 className="text-3xl font-bold">Sugar Free Gold Low Calories</h1>
        <p className="text-[#686363]">Glasses/Modern Line Collection/Morgan</p>
      </div>

      {/* Product details */}
      <div className="w-full flex flex-col sm:flex-row h-max gap-4 mt-6">
        {/* image section */}
        <div className="w-full md:w-[50%] h-[500px] bg-[#F8F8F8]">
          <img src={Product1} alt="productImage" className="w-full h-full" />
        </div>

        {/* product ordering function */}
        <div className="pl-8 w-full p-2 md:w-[50%]">
          {/* price  */}
          <div className="flex flex-row justify-between border-b-2">
            <div className="flex flex-row gap-4 items-baseline h-24 ">
              <div className="text-xl text-[#090F47] opacity-75 line-through">
                Rs.500
              </div>
              <div className="text-4xl font-bold text-[#090F47] leading-10">
                RS.250
              </div>
            </div>
            <div>
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                className="text-2xl md:mr-6"
              />
            </div>
          </div>

          {/* package details */}
          <div className="mt-6">
            <p className="text-[#090F47] text-3xl font-semibold">
              Package Size
            </p>
            <div className="flex flex-row gap-4 mt-6">
              <div className="bg-[#F5F5F5] w-28 h-24 rounded-lg flex flex-col gap-2 p-2 md:p-4 hover:border-2 hover:border-[#FFA41B] hover:bg-[#FFA41B] hover:bg-opacity-35">
                <p className="text-[#090F47] text-xl font-semibold">Rs. 100</p>
                <span> 10 Pellets</span>
              </div>
              <div className="bg-[#F5F5F5] w-28 h-24 rounded-lg flex flex-col gap-2 p-2 md:p-4 hover:border-2 hover:border-[#FFA41B] hover:bg-[#FFA41B] hover:bg-opacity-35">
                <p className="text-[#090F47] text-xl font-semibold">Rs. 100</p>
                <span> 10 Pellets</span>
              </div>
              <div className="bg-[#F5F5F5] w-28 h-24 rounded-lg flex flex-col gap-2 p-2 md:p-4 hover:border-2 hover:border-[#FFA41B] hover:bg-[#FFA41B] hover:bg-opacity-35">
                <p className="text-[#090F47] text-xl font-semibold">Rs. 100</p>
                <span> 10 Pellets</span>
              </div>
              <div className="bg-[#F5F5F5] w-28 h-24 rounded-lg flex flex-col gap-2 p-2 md:p-4 hover:border-2 hover:border-[#FFA41B] hover:bg-[#FFA41B] hover:bg-opacity-35">
                <p className="text-[#090F47] text-xl font-semibold">Rs. 100</p>
                <span> 10 Pellets</span>
              </div>
            </div>
          </div>

          {/* buy buttons */}
          <div className="mt-12 flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <NavLink to="/cart">
              <button className="w-96 md:w-52 h-14 rounded-lg bg-[#7D8CFF] text-xl hover:bg-[#4B5DE7] font-semibold">
                Add to bag <ShoppingCartOutlinedIcon />
              </button>
            </NavLink>

            <div className="font-semibold text-lg">OR</div>

            <NavLink to="/cart" >
              <button className="w-96 md:w-52 h-14 rounded-lg bg-[#eeb469] text-xl hover:bg-[#F2971F] font-semibold">
                Buy Now <ElectricBoltOutlinedIcon />
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="mt-8 p-2">
        <div className="">
          <ul className="hidden md:flex flex-row gap-12 items-center justify-center leading-8 text-xl border-t-2 border-b-2 border-gray-200 my-6">
            <li>PRODUCT DETAIL</li>
            <li className="">SAFETY ADVICE</li>
            <li>FAQ</li>
            <li>PRODUCT SUBSTITUTES</li>
            <li>CUSTOMERS ALSO BOUGHT</li>
          </ul>
          <div className="p-4">
            <h1>PRODUCT DETAIL</h1>
            <p className="text-[#090F47]  opacity-55">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Morbi ut nisi odio. Nulla facilisi. Nunc risus massa, gravida id
              egestas a, pretium vel tellus. Praesent feugiat diam sit amet
              pulvinar finibus. Etiam et nisi aliquet, accumsan nisi sit.
            </p>
            <br/>
            <p className="text-[#090F47]  opacity-55">
            Candid Dusting Powder 50 gm | For Fungal Infections, Sweat Rashes, Irritation & Itching contains clotrimazole, aantifungal medication used to treat various fungal skin infections such as athlete's foot, ringworm, fungal nappy rash,and fungal sweat rash. Furthermore, it helps to alleviate the symptoms of thrush. Candid Dusting Powder 50 gm | For Fungal Infections, Sweat Rashes, Irritation & Itching damages the fungal cell membrane and causes the components to leak out, thus killing the fungus and curing the infectio
            </p>
          </div>
        </div>
      </div>

      {/* more to love */}
      <div className="flex flex-col gap-4 my-10 p-4">
      <p className="text-3xl font-semibold">Product Substitutes</p>
      <div className="flex flex-wrap">
        <ProductShort/>
        <ProductShort/>
        <ProductShort/>
        <ProductShort/>
        <ProductShort/>
        <ProductShort/>
        <ProductShort/>
        <ProductShort/>
        <ProductShort/>
      </div>

      </div>
    </div>
  );
}

export default ProductDetails;
