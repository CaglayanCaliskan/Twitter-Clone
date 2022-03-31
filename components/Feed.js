import {useEffect} from 'react';
import TopHeader from './TopHeader';
import Tweet from './Tweet';
import TweetBox from './TweetBox';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase.config';
import {useState} from 'react';

function Feed() {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const querySnapshot = await getDocs(collection(db, 'tweets'));
    let semiTweet = [];
    querySnapshot.forEach((doc) => {
      semiTweet.push(doc.data());
    });
    setTweets(semiTweet);
  };

  useEffect(fetchTweets, [tweets]);

  return (
    <div className='flex-grow border-l border-r border-gray-700 ml-[52px] sm:ml-[92px] md:ml-[128px] xl:ml-[275px]  text-cyan-50'>
      <TopHeader />
      <TweetBox onSubmitTweet={fetchTweets} />
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
}

export default Feed;
