import React from "react";
import { Link } from "react-router-dom";

import "../css/Header.css";

function Header(props) {
  return (
    <div className='container--header'>
      <div className='header--name'>
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
