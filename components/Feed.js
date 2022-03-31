import {useEffect} from 'react';
import TopHeader from './TopHeader';
import Tweet from './Tweet';
import TweetBox from './TweetBox';
import {collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import {db} from '../firebase.config';
import {useState} from 'react';

function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'tweets'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setTweets(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className='flex-grow border-l border-r border-gray-700 ml-[52px] sm:ml-[92px] md:ml-[128px] xl:ml-[275px]  text-cyan-50'>
      <TopHeader />
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet.data()} />
      ))}
    </div>
  );
}

export default Feed;
