import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import FormatPrice from "../Helper/FormatPrice";
import { CartContext } from "../../Context/ContextProvider";

function CartItems({ product }) {
  const { cart, dispatch } = useContext(CartContext);
  const product_Id = product.id || product._id;

  function increment(id) {
    const index = cart.findIndex((p) => p._id === id || p.id === id);
    if (index !== -1 && cart[index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  }

  function decrement(id) {
    const index = cart.findIndex((p) => p._id === id || p.id === id);
    if (index !== -1 && cart[index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  }

  return (
    <div className="flex flex-row w-full h-52 md:h-44 border-2 border-[#d0cece] ">
      {/* left side photo */}
      <div className="md:w-48 w-44 h-full ">
        <img
          src={product.photos && product.photos.length > 0 ? product.photos[0] : '/path/to/default-image.png'}
          alt="productImg"
          className="w-full h-full object-contain p-2"
        />
      </div>

      {/* right side product details */}
      <div className="flex flex-col gap-2 w-full px-2 py-3 md:p-4">
        <div className="flex flex-row justify-between">
          <div>{product.name || product.title}</div>
          <div>
            <button onClick={() => dispatch({ type: "Remove", id: product_Id })}>
              <RxCross2 className="font-semibold" />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <p>Packet size: </p>
          <div>100</div>
        </div>

        <div>
          {/* price */}
          <div>
            <FormatPrice price={product.price || product.discountFees} />
          </div>

          {/* increment and decrement */}
          <div className="py-1 px-2 inline-block bg-white border border-gray-200 rounded-lg mt-6">
            <div className="flex items-center gap-x-1.5">
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={() => decrement(product_Id)}
                disabled={product.quantity === 1}
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
                value={product.quantity}
                readOnly
              />
              <button
                type="button"
                className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={() => increment(product_Id)}
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
