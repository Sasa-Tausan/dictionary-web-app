import emoji from '../assets/images/emoji.svg';
import { useContext } from 'react';
import { MyContext } from './MyContext';

const NoWord = () => {
  const { theme } = useContext(MyContext);
  return (
    <section className='no-word-section d-flex flex-col align-items-center'>
      <img src={emoji} alt='' />
      <div className=' d-flex flex-col align-items-center text-align-center gap-24'>
        <h3 className={`heading-s text-color-${theme}`}>
          No Definitions Found
        </h3>
        <p className={`body-m text-color-${theme}`}>
          Sorry pal, we couldn&apos;t find definitions for the word you were
          looking for. You can try the search again at later time or head to the
          web instead.
        </p>
      </div>
    </section>
  );
};

export default NoWord;
