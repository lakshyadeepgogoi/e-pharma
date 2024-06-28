import React, { useContext } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';
import { CartContext } from '../../Context/ContextProvider';

function HomeSectionCard({ name, price, photos, tag, id , quantity}) {

  const product = { name, price, photos, tag, id, quantity  };

  const { dispatch } = useContext(CartContext);

  const truncateString = (str, num) => {
    if (!str) {
      return '';
    }
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  const tagString = Array.isArray(tag) && tag.length > 0 ? tag[0] : '';
  const truncatedTag = truncateString(tagString, 20); // Adjust the number as needed
  const truncatedName = truncateString(name, 25); // Adjust the number as needed

  return (
    <div className='sm:h-96 h-max w-[11rem] sm:w-[17rem] flex flex-col rounded-xl border-2 md:my-2 my-1 relative'>
      <Link to={`/Product-details/${id}`}>
        <div className='w-full object-cover h-40 sm:h-48'>
          {photos && photos.length > 0 ? (
            <img src={photos[0]} alt='product' className='w-full h-full object-contain' />
          ) : (
            <img src={'/path/to/default-image.png'} alt='default' className='w-full h-full object-cover' />
          )}
        </div>
        <div className='w-full h-full p-2 sm:p-3 flex flex-col'>
          <div className='text-[#15A9E3] text-base'>{truncatedTag}</div>
          <h1 className='text-[#184363] font-semibold text-base mb-4'>{truncatedName}</h1>
          <div className='flex flex-row h-10 mb-1 sm:mb-6 justify-between items-center'>
            <div className='text-[#184363] text-lg'><FormatPrice price={price} /></div>
            <div className='w-12 h-10 text-center bg-[#FFC000] rounded-full block sm:hidden shadow-md align-middle'>
              <AddShoppingCartIcon className='mt-1' />
            </div>
          </div>
        </div>
      </Link>
      <button 
        className='text-center align-middle bg-[#EDF4] h-10 w-full mx-auto rounded-full mb-2 hover:bg-[#FFC000] hidden sm:block' 
        onClick={() => dispatch({ type: "Add", product })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default HomeSectionCard;
