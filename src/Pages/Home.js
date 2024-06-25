import React, { useEffect, useState } from "react";
import landing from "../Component/Assets/landing img.png";
import HomeSectionCarosal from "../Component/HomeSectionCard/HomeSectionCarosal";
import HomeSectionCard from "../Component/HomeSectionCard/HomeSectionCard";
import OffersCards from "../Component/HomeSectionCard/OffersCards";
import offer1 from "../Component/Assets/Medicine/offer1.png";
import offer2 from "../Component/Assets/Medicine/Offer2.png";
import lastBanner from "../Component/Assets/Medicine/lastBanner.png";
import MoretoLove from "../Component/Category/MoreToLove/MoretoLove";
import axios from "axios";

function Home() {
  const [loading, setLoading] = useState(true);
  const [offers, setOffers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      try {
        const { data: offersResponse } = await axios.get(
          "http://localhost:4000/api/offers"
        );
        setOffers(offersResponse);
        console.log("heelo offer data"+ offers)
        
        const productIds = offersResponse.flatMap((offer) => offer.products);
        console.log(productIds);
        const uniqueProductIds = [...new Set(productIds)];
        
         const productRequests = uniqueProductIds.map((id) =>
          axios.get(`http://localhost:4000/api/products/${id}`).catch(error => {
            console.error(`Error fetching product ${id}:`, error);
            return null;
          })
        );
        
        const productsResponse = await Promise.all(productRequests);
        const productsData = productsResponse.map(response => response.data);
        setProducts(productsData);
        console.log('Product'+ productsData);
        
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchOffers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full">
      <div>
        <img
          src={landing}
          alt="landing"
          className="w-[90%] h-48 sm:h-full sm:w-11/12 object-cover mt-6 mb-8 m-auto rounded-3xl"
        />
      </div>

      {/* 80% screen start */}
      <div className="w-[87%] sm:w-[82%] m-auto">
        {/* search bar options */}
        <div className="w-full h-20 md:flex flex-row justify-evenly mt-8 items-center hidden mb-6">
          <h1>Select a product</h1>
          <div className="w-60 h-10">
            <select
              name="selectedFruit"
              className="w-full h-full pr-4 pl-4 border-2 rounded-full"
            >
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
          </div>
          <div className="w-60 h-10">
            <select
              name="selectedFruit"
              className="w-full h-full pr-4 pl-4 border-2 rounded-full"
            >
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
          </div>
          <div className="text-center">or</div>
          <div className="w-64 h-10">
            <input
              className="w-full h-full pr-4 pl-4 border-2 rounded-full"
              placeholder="Enter SKU"
            ></input>
          </div>
          <div className="w-64 h-10">
            <button className="w-full h-full pr-4 pl-4 border-2 rounded-full bg-[#F2971F]">
              Shop Now
            </button>
          </div>
        </div>

        {/* product */}
        <div className="w-full my-4">
          <div className="sm:text-center font-bold mt-6 mb-4 sm:text-2xl text-xl flex flex-row sm:flex-none justify-between items-center">
            <div className="sm:mx-auto">Best Selling Product</div>
            <div className="text-base sm:hidden text-[#006AFF]">More</div>
          </div>
          <div className="my-4 w-full hidden sm:block">
            <HomeSectionCarosal />
          </div>
          {/* for mobile view */}
          <div className="sm:hidden">
            <HomeSectionCarosal />
          </div>
        </div>

        {/* count down with deal */}
        <div className="mt-10">
          <div className="flex flex-row w-full h-16 gap-2 sm:gap-4 items-center justify-start sm:justify-center">
            <div className="text-[#184363 text] text-xl sm:text-2xl font-bold">
              Deal Of The Week
            </div>
            <div className="flex flex-row gap-3 h-full">
              <div className="w-12 h-full bg-[#15A9E3] flex flex-col justify-center items-center rounded-lg">
                <div className="text-xl font-bold">71</div> <div>Days</div>
              </div>
              <div className="w-12 h-full bg-[#15A9E3] flex flex-col justify-center items-center rounded-lg">
                <div className="text-xl font-bold">19</div>
                <div>Hours</div>
              </div>
              <div className="w-12 h-full bg-[#15A9E3] flex flex-col justify-center items-center rounded-lg">
                <div className="text-xl font-bold">25</div>
                <div>Min</div>
              </div>
              <div className="w-12 h-full bg-[#15A9E3] flex flex-col justify-center items-center rounded-lg">
                <div className="text-xl font-bold">11</div>
                <div>Sec</div>
              </div>
            </div>
          </div>
          {/* products */}
          <div>
            <div className="my-4 w-full hidden gap-4 sm:flex flex-row">
              {/* {products.map((product) => ( */}
                <OffersCards/>
                <OffersCards/>

                {/* //   key={product._id}
                //   title={product.title}
                //   price={product.price}
                //   image={product.image}
                // /> */}
              {/* // ))} */}
            </div>
            {/* for mobile view */}
            <div className="flex flex-row gap-3 sm:hidden my-4">
              <HomeSectionCard />
              <HomeSectionCard />
            </div>
          </div>
        </div>

        {/* special Offer */}
        <div className="flex flex-col mt-14 mb-6 sm:h-96">
          <div className="text-center w-full h-8 font-bold text-3xl">
            Special offers
          </div>
          <div className="flex sm:flex-row gap-2 my-6">
            <img src={offer1} alt="offer1Img" className="hidden md:block" />
            <img src={offer2} alt="offer2Img" />
          </div>
        </div>

        {/* products */}
        <div className="mt-6 mb-12">
          <div className="hidden sm:block">
            <HomeSectionCarosal />
          </div>
          <div className="flex flex-row gap-3 sm:hidden my-4">
            <HomeSectionCard />
            <HomeSectionCard />
          </div>
        </div>

        {/* last banner */}
        <div className="w-full mt-16 xl:h-96">
          <img
            src={lastBanner}
            alt="lastBanner"
            className="object-cover mt-6 rounded-3xl"
          />
        </div>

        {/* more to Love */}
        <div className="flex flex-col gap-6 w-full m-auto items-center justify-center">
          <p className="text-3xl font-semibold">More to Love</p>
          <div>
            <MoretoLove />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
