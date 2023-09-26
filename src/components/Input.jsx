import { useContext } from 'react';
import { MyContext } from './MyContext';
import iconSearch from '../assets/images/icon-search.svg';

const Input = () => {
  const { theme, word, getWord, fetchWord, fetchDataEnter } =
    useContext(MyContext);
  return (
    <>
      <label
        className='label-input relative d-flex align-items-center '
        htmlFor='search'
      >
        <input
          name={word}
          id='search'
          value={word}
          placeholder='Search for any word...'
          className={`search-input full-width d-flex align-items-center space-between bg-input-${theme} bold text-color-${theme}`}
          onChange={getWord}
          onKeyDown={fetchDataEnter}
        />
        <img
          src={iconSearch}
          alt=''
          className='search-icon pointer'
          onClick={fetchWord}
        />
      </label>
    </>
  );
};

export default Input;
