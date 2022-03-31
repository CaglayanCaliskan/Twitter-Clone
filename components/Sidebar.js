import Image from 'next/image';
import SidebarOption from './SidebarOption';
//icons
import HomeIcon from '../assets/icons/Home.svg';
import Explore from '../assets/icons/Explore.svg';
import Communities from '../assets/icons/Communities.svg';
import Notifications from '../assets/icons/Notifications.svg';
import Messages from '../assets/icons/Messages.svg';
import Bookmarks from '../assets/icons/Bookmarks.svg';
import Profile from '../assets/icons/Profile.svg';
import More from '../assets/icons/More.svg';
import Dots from '../assets/icons/Dots.svg';

function Sidebar() {
  return (
    <div className='sm:flex flex-col items-center xl:items-start  xl:w-[275px]  fixed h-full transition-all'>
      <div>
        <div className='flex items-center justify-center w-[52px] h-[52px] sm:my-0.5 sm:mx-5 hoverAnimation p-0.5 '>
          <Image src='https://rb.gy/ogau5a' width={30} height={30} />
        </div>
        {/* options */}
        <div className=' mt-0.5 mb-1 sm:px-3  '>
          <SidebarOption text={'Home'} Icon={HomeIcon} active />
          <SidebarOption text={'Explore'} Icon={Explore} />
          <SidebarOption text={'Communities'} Icon={Communities} />
          <SidebarOption text={'Notifications'} Icon={Notifications} />
          <SidebarOption text={'Messages'} Icon={Messages} />
          <SidebarOption text={'Bookmarks'} Icon={Bookmarks} />
          <SidebarOption text={'Profile'} Icon={Profile} />
          <SidebarOption text={'More'} Icon={More} />
        </div>
        {/* button tweet */}
        <button className=' hidden md:inline-block md:w-28 bg-orange-500 rounded-full xl:w-[208px]  h-[52px] ml-4 my-4 font-bold text-lg hover:opacity-80 active:scale-90 transition-all select-none'>
          Tweet
        </button>
      </div>
      {/* profile */}
      <div className='text-[#d9d9d9] flex items-center  mt-auto hoverAnimation xl:ml-auto w-11/12 m-auto my-3'>
        <img
          src='https://pbs.twimg.com/profile_images/1012204118969069571/cfS0_vK-_400x400.jpg'
          alt='a'
          className='h-10 w-10 rounded-full xl:mr-2.5 ml-1.5'
        />
        <div className='hidden xl:inline leading-5'>
          <h4 className='font-bold'>asd</h4>
          <p className='text-[#6e767d]'>@asd</p>
        </div>
        <div className='flex-1 flex justify-end'>
          <Dots className='fill-white  h-7 hidden md:block  ' />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
