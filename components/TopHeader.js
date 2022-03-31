import Stars from '../assets/icons/Stars.svg';

function TopHeader() {
  return (
    <div className='text-[#d9d9d9] text-lg md:text-xl font-bold flex items-center justify-between py-2 px-3 sticky top-0 z-30  bg-black  w-full'>
      <h2>Home</h2>
      <div className=' h-7 w-7 flex items-center justify-center'>
        <Stars className='hoverAnimation fill-white  h-6 w-6 xl:py-0 xl:px-0' />
      </div>
    </div>
  );
}

export default TopHeader;
