import Image from 'next/image';
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className='sm:flex flex-col  items-center xl:items-start xl:w-[275px] px-3 fixed h-full bg-slate-500'>
      <div className='flex items-center justify-center w-[52px] h-[52px] my-0.5 hoverAnimation p-0.5'>
        <Image src='https://rb.gy/ogau5a' width={30} height={30} />
      </div>
      <div className=' mt-0.5 mb-1'>
        <SidebarOption text={'Homeeeee'} />
        <SidebarOption text={'Home'} />
        <SidebarOption text={'Home'} />
        <SidebarOption text={'Home'} />
      </div>
    </div>
  );
}

export default Sidebar;
