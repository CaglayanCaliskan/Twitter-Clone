import Link from 'next/link';
import {useRouter} from 'next/router';

function SidebarOption({text, Icon}) {
  const router = useRouter();
  return (
    <Link href={text === 'Home' ? '/' : `/navi/${text}`}>
      <div
        className={`${
          router.pathname === '/navi/' + text
            ? 'text-orange-600 fill-orange-600'
            : text - ['#d9d9d9']
        }    hoverAnimation xl:py-3  xl:px-4 xl:w-fit flcenter  text-xl space-x-4 lg:h-[58px] h-[68px] `}
      >
        <Icon
          className={`${
            router.pathname === '/navi/' + text
              ? 'fill-orange-600'
              : 'fill-white'
          } fill-white  h-[26.5px]  pointer-events-none`}
        />
        <div className='hidden xl:inline  select-none'>{text}</div>
      </div>
    </Link>
  );
}

export default SidebarOption;
