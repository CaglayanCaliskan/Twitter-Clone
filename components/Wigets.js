import Search from '../assets/icons/Search.svg';

import Trend from './Trend';
function Wigets() {
  return (
    <div className='hidden md:w-[350px] md:block md: max-h-fit ml-10 '>
      <div className='flex  my-2 bg-[#202327] rounded-full  w-full text-gray-500 '>
        <Search className='fill-gray-500 w-6 mx-3' />
        <input
          type='text'
          className=' bg-transparent p-3 outline-none border-none '
          placeholder='Search Twitter'
        />
      </div>
      <div className='bg-[#202327] rounded-xl mt-4 py-2'>
        <div className='text-xl py-3 px-4  font-bold'>Trends for you</div>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>

      {/*  */}
    </div>
  );
}

export default Wigets;
