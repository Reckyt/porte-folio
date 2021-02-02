import React from "react";

import "../css/Header.css";

function Header() {
  return (
    <div className='container--header'>
      <div className='header--name'>
        <h4>MAXIME LOMBARDO</h4>
      </div>
      <div className='header--nav'>
        <h4>projects</h4>
        <h4>About</h4>
        <h4>Contact</h4>
      </div>
    </div>
  );
}

export { Header };
