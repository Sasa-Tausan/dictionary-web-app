import axios from 'axios';
import { useState } from 'react';
import { MyContext } from './components/MyContext';
import Header from './components/Header';
import Input from './components/Input';
import { Loading } from './components/Loading';
import Word from './components/Word';
import NoWord from './components/NoWord';

const App = () => {
  const [selectedFont, setSelectedFont] = useState('sans-serif');
  const [isOpen, setIsOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [word, setWord] = useState('');
  const [wordData, setWordData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const theme = isLightTheme ? 'light' : 'dark';

  const handleFont = (font) => {
    setSelectedFont(font);
    setIsOpen(false);
  };

  const getWord = (e) => {
    setWord(e.target.value);
    setWordData(null);
  };

  const fetchWord = () => {
    setIsLoading(true);
    setError(null);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(function (response) {
        setWordData(response.data);
        setIsLoading(false);
        setError(null);
      })
      .catch(function () {
        setError('An error occurred while fetching the word.');
        setError(true);
        setIsLoading(false);
      });

    setWord('');
  };

  return (
    <MyContext.Provider
      value={{
        selectedFont,
        handleFont,
        isOpen,
        setIsOpen,
        isLightTheme,
        setIsLightTheme,
        theme,
        word,
        getWord,
        fetchWord,
        wordData,
      }}
    >
      <div className={`App ff-${selectedFont} bg-${theme}`}>
        <div className='page-container full-width d-flex flex-col'>
          <Header />
          <Input />
          {isLoading && <Loading />}
          {wordData && <Word />}
          {error && <NoWord />}
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default App;
