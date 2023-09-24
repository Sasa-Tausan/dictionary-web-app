import { useContext } from 'react';
import { MyContext } from './MyContext';

const ToggleTheme = () => {
  const { isLightTheme, setIsLightTheme } = useContext(MyContext);
  return (
    <label className='switch'>
      <input
        type='checkbox'
        onClick={() => setIsLightTheme(!isLightTheme)}
      ></input>
      <span className='slider round'></span>
    </label>
  );
};

export default ToggleTheme;
