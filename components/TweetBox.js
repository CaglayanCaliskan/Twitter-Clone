import {db} from '../firebase.config';
import {collection, addDoc, serverTimestamp} from 'firebase/firestore';

import {useState, useRef} from 'react';

//emoji lib.
import 'emoji-mart/css/emoji-mart.css';
import {Picker} from 'emoji-mart';

//icons
import Media from '../assets/icons/Media.svg';
import Gif from '../assets/icons/Gif.svg';
import Emoji from '../assets/icons/Emoji.svg';
import Location from '../assets/icons/Location.svg';

function TweetBox() {
  const [tweetContent, setTweetContent] = useState('');
  const imageSelect = useRef(null);
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const sendTweet = async () => {
    try {
      const docRef = await addDoc(collection(db, 'tweets'), {
        first: 'Unknow',
        nick: 'Unknow',
        tweetContent,
        timestamp: serverTimestamp(),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    setTweetContent('');
  };

  const addEmoji = (e) => {
    let sym = e.unified.split('-');
    let codesArray = [];
    sym.forEach((el) => codesArray.push('0x' + el));
    let emoji = String.fromCodePoint(...codesArray);
    setTweetContent(tweetContent + emoji);
  };

  return (
    <div className='flex px-2 py-1 h-fit border-b border-gray-700 '>
      <div className='  pt-1 flcenter'>
        <span className='h-12 w-12 rounded-full xl:mx-4   bg-blue-400 flcenter '>
          U
        </span>
      </div>
      <div className='  flex-1 '>
        {/* input tweet>>>>>>>>>>>>>>>>>>>>>> */}
        <form className='divide-y'>
          <textarea
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            placeholder="What's happening?"
            className=' bg-transparent min-h-[75px] outline-none text-[#d9d9d9] text-xl placeholder-gray-500 tracking-wide  overflow-hidden resize-none p-2 w-full '
          />
        </form>
        <div className='relative mt-3 flex justify-between'>
          <div className='flex items-center justify-around w-[136px] h-9'>
            <div className='w-fit'>
              <Media
                className='fill-orange-500 w-5 h-5 hover:cursor-pointer hover:opacity-80'
                onClick={() => imageSelect.current.click()}
              />
              <input type='file' ref={imageSelect} hidden />
            </div>
            <div className='w-fit'>
              <Gif className='fill-orange-500 w-5 h-5 hover:cursor-pointer hover:opacity-80' />
            </div>
            <div className='w-fit'>
              <Emoji
                className='fill-orange-500 w-5 h-5 hover:cursor-pointer hover:opacity-80'
                onClick={() => setChosenEmoji(!chosenEmoji)}
              />
            </div>
            <div className='w-fit'>
              <Location className='fill-orange-500 w-5 h-5 hover:cursor-pointer hover:opacity-80' />
            </div>

            {chosenEmoji && (
              <Picker
                onSelect={addEmoji}
                style={{
                  position: 'absolute',
                  marginTop: '465px',
                  marginLeft: '40px',
                  maxWidth: '320px',
                  borderRadius: '30px',
                }}
                theme='dark'
              />
            )}
          </div>
          <button
            onClick={sendTweet}
            className=' w-22 px-4 bg-orange-500 rounded-full h-[34px]  font-bold text-lg disabled:opacity-50 active:scale-90 transition-all select-none appearance-none'
            disabled={!tweetContent.trim()}
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetBox;
