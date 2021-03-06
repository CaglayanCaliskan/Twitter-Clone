import Image from 'next/image';
import SidebarOption from './SidebarOption';
import Link from 'next/dist/client/link';
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
    <div className='sm:flex  flex-col  items-center xl:items-start  xl:w-[275px]  fixed h-full '>
      <Link href='/'>
        <div className='flcenter w-[52px] h-[52px] sm:my-0.5 sm:mx-5 hoverAnimation p-0.5 '>
          <Image src='https://rb.gy/ogau5a' width={30} height={30} />
        </div>
      </Link>
      {/* options */}
      <div className=' mt-0.5 mb-1 sm:px-3  '>
        <SidebarOption text={'Home'} Icon={HomeIcon} />
        <SidebarOption text={'Explore'} Icon={Explore} />
        <SidebarOption text={'Communities'} Icon={Communities} />
        <SidebarOption text={'Notifications'} Icon={Notifications} />
        <SidebarOption text={'Messages'} Icon={Messages} />
        <SidebarOption text={'Bookmarks'} Icon={Bookmarks} />
        <SidebarOption text={'Profile'} Icon={Profile} />
        <SidebarOption text={'More'} Icon={More} />
      </div>
      {/* button tweet */}

      <button className=' hidden xl:block bg-orange-500 rounded-full xl:w-[208px] h-[52px] sm:ml-4 my-4 font-bold text-lg shadow-md hover:opacity-80 active:scale-90 select-none'>
        Tweet
      </button>

      {/* profile */}

      <div className=' hidden xl:block hoverAnimation flcenter xl:p-4 mt-auto my-4 relative '>
        Profile details
      </div>
    </div>
  );
}

export default Sidebar;
