
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import CraftyLogo from "../components/pictures/CraftyLogo.png"
import "./Navbar.css"
import ShopFormModal from './shops/shopFormMODAL';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
      <img src={CraftyLogo} className="CraftyLogo" alt="Crafty's cool logo"/>
      </Link>

      <ul>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <div className='shop-form-button'>
          <ShopFormModal />
        </div>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
