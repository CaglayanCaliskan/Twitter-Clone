import Image from 'next/image';
function SidebarOption({text}) {
  return (
    <div className='h-[50.25px] w-fit xl:m-1 bg-red-300 flex items-center hoverAnimation'>
      <div className='flex py-3'>
        <div className='flex items-center justify-center w-[26.25px] h-[26.25px]'>
          <Image src='https://rb.gy/ogau5a' width={30} height={30} />
        </div>
        <div className=' h-6 ml-5 mr-4'>{text}</div>
      </div>
    </div>
  );
}

export default SidebarOption;
