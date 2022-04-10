import Link from 'next/link';
function SidebarOption({text, Icon}) {
  return (
    <Link href={text == 'Home' ? '/' : `/navi/${text}`}>
      <div
        className={`text-[#d9d9d9] hoverAnimation xl:py-3 xl:px-4 xl:w-fit flcenter  text-xl space-x-4 lg:h-[58px] h-[68px] `}
      >
        <Icon className='fill-white h-[26.5px]  pointer-events-none ' />
        <div className='hidden xl:inline  select-none'>{text}</div>
      </div>
    </Link>
  );
}

export default SidebarOption;
