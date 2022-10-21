import React, { useState } from 'react';
import './navbar.css';
import Logo from '../images/logo.png';
import { links } from '../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="NavLogo" />
        </Link>
        <ul
          className={`nav__links ${
            isNavShowing ? 'show__nav' : 'hide__nav'
          }`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  end
                  className={({ isActive }) =>
                    isActive ? 'active-nav' : ''
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
