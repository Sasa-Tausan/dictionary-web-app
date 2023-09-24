import { useContext, useRef } from 'react';
import { MyContext } from './MyContext';
import iconPlay from '../assets/images/icon-play.svg';

const Word = () => {
  const { wordData, theme } = useContext(MyContext);
  let hasAudio;
  const { word, phonetic, phonetics } = wordData[0];

  if (phonetics.length !== 0) {
    hasAudio = !!phonetics[0].audio;
  }

  const audioRef = useRef(null);

  console.log(wordData);

  const playAudio = () => {
    const audioEl = audioRef.current;
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

        {hasAudio && (
          <button className={`play-btn pointer`} onClick={playAudio}>
            <audio ref={audioRef} src={phonetics[0].audio}></audio>
            <img src={iconPlay} alt='' className='play-icon' />
          </button>
        )}
      </div>
      <div className='d-flex align-items-center gap-24'>
        <h2 className={`heading-m bold text-color-${theme}`}>noun</h2>
        <hr className={`hr-line full-width bg-hr-${theme}`} />
      </div>
    </section>
  );
};

export default Word;
