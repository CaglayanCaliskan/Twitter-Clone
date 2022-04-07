import Link from 'next/link';
function SidebarOption({text, Icon, active}) {
  const moveToLink = (e) => {
    if (e.target.textContent == 'Profile') {
      console.log('yes prof');
      target = '/Profile';
    }
  };
  return (
    <div
      onClick={moveToLink}
      className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start transition-all text-xl space-x-4 lg:h-[58px] h-[68px] hoverAnimation`}
    >
      <Icon className='fill-white h-[26.5px]  pointer-events-none ' />
      <div scroll={false} href={text} className='hidden xl:inline  select-none'>
        {text}
      </div>
    </div>
  );
}

export default SidebarOption;
