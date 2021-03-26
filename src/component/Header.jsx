import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/design/logo.svg";

import "../css/Header.css";

function Header(props) {
  return (
    <div className='container--header'>
      <div className='header--name'>
        <img className='logo' src={logo} alt='logo' />
        <Link className='navigation' to='/'>
          MAXIME LOMBARDO
        </Link>
      </div>
      <div className='header--nav'>
        <Link className='navigation' to='/'>
          Projects
        </Link>
        <Link className='navigation' to='/about'>
          About
        </Link>
        <Link className='navigation' onClick={() => props.setOpen(!props.open)}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export { Header };
