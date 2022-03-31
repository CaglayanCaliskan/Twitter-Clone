import Dots from '../assets/icons/Dots.svg';
import Comment from '../assets/icons/Comment.svg';
import Retweet from '../assets/icons/Retweet.svg';
import Like from '../assets/icons/Like.svg';
import Share from '../assets/icons/Share.svg';
function Tweet() {
  return (
    <div className='py-2 h-fit border-b border-gray-700 w-full '>
      <div className='flex justify-between w-full'>
        <div className=' min-w-fit mx-4 py-2'>
          <img
            src='https://pbs.twimg.com/profile_images/1012204118969069571/cfS0_vK-_400x400.jpg'
            alt='a'
            className='h-12 w-12 rounded-full mr-2.5 ml-1.5'
          />
        </div>
        <div className=' max-w-full '>
          <div className=' flex h-7 w-full'>
            <h4 className='font-bold '>asd</h4>
            <p className='text-[#6e767d]'>@asd</p>
            <Dots className='fill-white h-7 block  ' />
          </div>
          {/* tweet context */}
          <div
            id='tweet context'
            className='flex  row-auto w-full text-lg text-[#d9d9d9]'
          >
            tweet hereaaaaaaaaassssssssssssssssssas tweet
            hereaaaaaaaaassssssssssssssssssas tweetssssss
            hereaaaaaaaaassssssssssssssssssas tweetsssssssssssssssssssss
            hereaaaaaaaaassssssssssssssssssas
          </div>
          {/* tweet icons */}

          <div className='flex my-4 items-center justify-between w-full h-fit'>
            <div className='w-fit flex items-center'>
              <Comment className='fill-gray-500 iconHoverBlue w-9 h-9 p-2' />
              <span className='ml-2'>2</span>
            </div>
            <div className='w-fit flex items-center'>
              <Retweet className='fill-gray-500  iconHoverGreen w-9 h-9 p-2' />
              <span className='ml-2'>2</span>
            </div>
            <div className='w-fit flex items-center'>
              <Like className='fill-gray-500 iconHoverRed w-9 h-9 p-2' />
              <span className='ml-2'>2</span>
            </div>
            <div className='w-fit flex items-center'>
              <Share className='fill-gray-500 iconHoverBlue w-9 h-9 p-2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
