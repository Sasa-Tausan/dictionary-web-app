import { useContext } from 'react';
import { MyContext } from './MyContext';
import iconDown from '../assets/images/icon-arrow-down.svg';

const SelectFont = () => {
  const { selectedFont, handleFont, isOpen, setIsOpen, theme } =
    useContext(MyContext);

  return (
    <div className='select-container relative d-flex  align-items-end '>
      <button
        className={`select-btn d-flex align-items-center space-between body-s text-color-${theme} bold pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedFont}
        <img src={iconDown} alt='' />
      </button>
      {isOpen && (
        <ul
          className={`font-options full-width d-flex flex-col bg-font-options-${theme} bs-${theme}`}
        >
          <li
            className={`font-item ff-sans-serif text-color-${theme} body-s bold pointer`}
            onClick={() => handleFont('sans-serif')}
          >
            Sans Serif
          </li>
          <li
            className={`font-item ff-sans-serif text-color-${theme} body-s bold pointer`}
            onClick={() => handleFont('serif')}
          >
            Serif
          </li>
          <li
            className={`font-item ff-sans-serif text-color-${theme} body-s bold pointer`}
            onClick={() => handleFont('mono')}
          >
            Mono
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectFont;
