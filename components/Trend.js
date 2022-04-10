import React from 'react';
import Dots from '../assets/icons/Dots.svg';

function Trend() {
  return (
    <div className='my-3 px-4 hover:bg-[#1e1e1e] transition-all hover:cursor-pointer'>
      <div className='flex'>
        <div className='flex-1 text-gray-500  text-sm'>Trending in Turkey</div>
        <Dots className='fill-gray-500 w-4' />
      </div>
      <div className=' font-bold'>
        <a href='https://github.com/CaglayanCaliskan' target='_blank'>
          Caglayan Caliskan
        </a>
      </div>
      <div className='flex-1 text-gray-500 text-sm mt-1'>28.785k Tweets</div>
    </div>
  );
}

export default Trend;
