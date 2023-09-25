import { useContext, useRef } from 'react';
import { MyContext } from './MyContext';
import iconPlay from '../assets/images/icon-play.svg';

const Word = () => {
  const { wordData, theme } = useContext(MyContext);
  console.log(wordData);
  let hasAudio = false;
  let audioObject;
  const { word, phonetic, phonetics, meanings } = wordData[0];
  const audioRef = useRef(null);
  if (phonetics.length !== 0) {
    audioObject = phonetics.find((item) => item.audio !== '');
    hasAudio = !!audioObject;
  }

  const nounDefinitions =
    meanings.find((meaning) => meaning.partOfSpeech === 'noun')?.definitions ||
    [];

  const verbDefinitions =
    meanings.find((meaning) => meaning.partOfSpeech === 'verb')?.definitions ||
    [];

  const synonyms =
    meanings.find((meaning) => meaning.partOfSpeech === 'noun')?.synonyms ||
    undefined;

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
          {hasAudio && audioObject && (
            <p className='heading-m bold text-color-purple'>
              {audioObject.text}
            </p>
          )}
          {!hasAudio && (
            <p className='heading-m bold text-color-purple'>{phonetic}</p>
          )}
        </div>

        {hasAudio && (
          <button className={`play-btn pointer`} onClick={playAudio}>
            <audio ref={audioRef} src={audioObject.audio}></audio>
            <img src={iconPlay} alt='' className='play-icon' />
          </button>
        )}
      </div>
      <div className='d-flex align-items-center gap-24'>
        <h2 className={`heading-m bold text-color-${theme}`}>noun</h2>
        <hr className={`hr-line full-width bg-hr-${theme}`} />
      </div>
      <h3 className='heading-s text-color-grey'>Meaning</h3>
      <ul className='definitions-list d-flex flex-col'>
        {nounDefinitions.map((item, index) => {
          const { definition } = item;
          return (
            <li key={index} className={`body-m text-color-${theme}`}>
              {definition}
            </li>
          );
        })}
      </ul>
      <div className='d-flex  gap-24'>
        <h3 className='heading-s text-color-grey'>Synonyms</h3>
        {!!synonyms && (
          <ul className='synonyms-list d-flex align-items '>
            {synonyms.map((item, index) => {
              return (
                <li key={index} className='body-s text-color-purple bold'>
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className='d-flex align-items-center gap-24'>
        <h2 className={`heading-m bold text-color-${theme}`}>verb</h2>
        <hr className={`hr-line full-width bg-hr-${theme}`} />
      </div>
      <ul className='definitions-list d-flex flex-col'>
        {verbDefinitions.map((item, index) => {
          const { definition, example } = item;
          return (
            <li key={index} className={` body-m text-color-${theme}`}>
              {definition}
              {!!example && (
                <p className='quote-text text-color-grey'>
                  &ldquo;{example}&rdquo;
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Word;
