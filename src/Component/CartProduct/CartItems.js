import React, { useState } from "react";
import Product1 from "../Assets/product_image/Product1.png";
import { RxCross2 } from "react-icons/rx";
import FormatPrice from "../Helper/FormatPrice";

function CartItems() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="flex flex-row w-full h-44 border-2 border-[#d0cece] ">
      {/* left side photo */}
      <div className="w-44 h-full ">
        <img
          src={Product1}
          alt="productImg"
          className="w-full h-full object-cover p-2"
        />
      </div>

      {/* right side product details */}
      <div className="flex flex-col gap-2 w-full p-4">
        <div className="flex flex-row justify-between items-center">
          <div>Sugar Free Gold Low Calories</div>
          <div>
            <RxCross2 />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <p>packet size : </p>
          <div>100</div>
        </div>

        <div>
          {/* price */}
          <div>
            <FormatPrice price={1000} />
          </div>

          {/* increment and decrement */}
          <div className="py-1 px-2 inline-block bg-white border border-gray-200 rounded-lg mt-6">
            <div className="flex items-center gap-x-1.5">
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={decrement}
                disabled={count === 0}
              >
                <svg
                  className="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <input
                className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                type="text"
                value={count}
                readOnly
              />
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={increment}
              >
                <svg
                  className="flex-shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
