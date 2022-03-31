import Dots from '../assets/icons/Dots.svg';
import Comment from '../assets/icons/Comment.svg';
import Retweet from '../assets/icons/Retweet.svg';
import Like from '../assets/icons/Like.svg';
import Share from '../assets/icons/Share.svg';

function Tweet({tweet}) {
  return (
    <div className='py-2 h-fit border-b border-gray-700 w-full '>
      <div className='flex w-full'>
        <div className=' min-w-fit mx-4 py-2'>
          <img
            src='https://pbs.twimg.com/profile_images/1012204118969069571/cfS0_vK-_400x400.jpg'
            alt='a'
            className='h-12 w-12 rounded-full mr-2.5 ml-1.5'
          />
        </div>
        <div className=' w-full '>
          <div className=' flex h-7 w-full justify-between pr-2'>
            <div className='flex'>
              <h4 className='font-bold '>{tweet.first}</h4>
              <p className='text-[#6e767d] ml-2'>@{tweet.first}</p>
            </div>

            <Dots className='fill-white h-7flex-1' />
          </div>
          {/* tweet content */}
          <div
            id='tweet context'
            className='flex pt-4  row-auto w-full text-lg text-[#d9d9d9]'
          >
            {tweet.tweetContent}
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
