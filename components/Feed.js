import TopHeader from './TopHeader';
import Tweet from './Tweet';
import TweetBox from './TweetBox';

function Feed() {
  return (
    <div className='flex-grow border-l border-r border-gray-700 ml-[52px] sm:ml-[92px] md:ml-[128px] xl:ml-[275px]  text-cyan-50'>
      <TopHeader />
      <TweetBox />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}

export default Feed;
