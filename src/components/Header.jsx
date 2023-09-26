import logo from '../assets/images/logo.svg';
import Moon from './Moon';
import SelectFont from './SelectFont';
import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <header className='full-width d-flex align-items-center space-between '>
      <img src={logo} alt='company logo' />
      <div className=' d-flex align-items-center gap-14'>
        <SelectFont />
        <div className='vertical-line'></div>
        <ToggleTheme />
        <Moon />
      </div>
    </header>
  );
};

export default Header;
