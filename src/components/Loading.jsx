import spinnerLight from '../assets/images/spinner-light.svg';
import spinnerDark from '../assets/images/spinner-dark.svg';

import { useContext } from 'react';
import { MyContext } from './MyContext';

export const Loading = () => {
  const { isLightTheme } = useContext(MyContext);
  return <img src={isLightTheme ? spinnerLight : spinnerDark} alt='' />;
};
