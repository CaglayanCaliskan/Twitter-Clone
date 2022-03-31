import Image from 'next/image';

function SidebarOption({text, Icon, active}) {
  return (
    <div
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start active:font-bold transition-all text-xl space-x-4 lg:h-[58px] h-[68px] hoverAnimation ${
        active && 'font-bold'
      }`}
    >
      <Icon className='fill-white h-[26.5px] ' />
      <div className='hidden xl:inline  select-none'>{text}</div>
    </div>
  );
}

export default SidebarOption;
