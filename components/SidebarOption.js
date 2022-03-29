import Image from 'next/image';

function SidebarOption({text, Icon, active}) {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-4 h-[58px] hoverAnimation ${
        active && 'font-bold'
      }`}
      onClick={() => active}
    >
      <Icon className='fill-white h-7  ' />
      <div className='hidden xl:inline '>{text}</div>
    </div>
  );
}

export default SidebarOption;

//text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-4 h-14 hoverAnimation
