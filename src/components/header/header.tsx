import { HeaderSearchBar } from './headerSearchBar';
import { HeaderTooltip } from './headerTooltip';
import { Link } from 'react-router-dom';

import './header.scss';
import { HeaderCart } from './headerCart';
import { BurgerIcon } from '../burger/burgerIcon';
import { HeaderLogin } from './headerSingIn';
import { CabinetIcon } from './headerCabinet';

export const Header = () => {
  return (
    <header className='header'>
      <div>
        <BurgerIcon />
      </div>
      <div className='header__logo'>
        <Link to="/" rel="home"><img className='logo' src='/assets/logo.png' style={{ width: "197px", height: "77px" }} /></Link>
      </div>
      <div>
        <HeaderSearchBar />
      </div>
      <div className="header__tooltip">
        <HeaderTooltip />
      </div>
      <HeaderLogin />
      <HeaderCart />
      <CabinetIcon />
    </header >
  )
}
