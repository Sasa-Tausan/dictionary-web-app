import { useContext, useRef } from 'react';
import { MyContext } from './MyContext';
import iconPlay from '../assets/images/icon-play.svg';

const Word = () => {
  const { wordData, theme } = useContext(MyContext);

  const { word, phonetic, phonetics } = wordData[0];
  const audioRef = useRef(null);
  const audioEl = audioRef.current;
  // console.log(wordData);
  // console.log(audioEl);
  const playAudio = () => {
    if (!audioEl) return;

    if (audioEl.paused || audioEl.ended) {
      // Play the audio
      audioEl.play();
    } else {
      // Pause the audio if it's playing
      audioEl.pause();
    }
  };

  return (
    <section className='word-section d-flex flex-col '>
      <div className='d-flex align-items-center space-between'>
        <div className='d-flex flex-col'>
          <h1 className={`heading-l bold text-color-${theme}`}>{word}</h1>
          <p className='heading-m bold text-color-purple'>{phonetic}</p>
        </div>
        <button
          className={`play-btn pointer ${!audioEl ? 'd-none' : 'd-block'}`}
          onClick={playAudio}
        >
          <audio ref={audioRef} src={phonetics[0].audio}></audio>
          <img src={iconPlay} alt='' className='play-icon' />
        </button>
      </div>
    </section>
  );
};

export default Word;
