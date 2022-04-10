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
    <>
      <div className='pagecenter'>
        <TopHeader />
        <TweetBox />
        {tweets.map((tweet, index) => (
          <Tweet key={index} tweet={tweet.data()} />
        ))}
      </div>
    </>
  );
}

export default Feed;
