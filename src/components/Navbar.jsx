import React from 'react';
import './navbar.css';
import Logo from '../images/logo.png';
import { links } from '../data';
import { GoThreeBars } from 'react-icons/go';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="NavLogo" />
        </Link>
        <ul className="nav__links">
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle-btn">
          <GoThreeBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
