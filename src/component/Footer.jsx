import React from "react";

import "../css/Footer.css";

function Footer() {
  return (
    <div className='container--footer'>
      <div className='footer--nav'>
        <h4>
          <a
            href='https://www.linkedin.com/in/maxime-lombardo/'
            target='_blank'
            rel='noreferrer'>
            LinkedIn
          </a>
        </h4>
        <h4>
          <a
            href='https://github.com/Reckyt?tab=repositories'
            target='_blank'
            rel='noreferrer'>
            Github
          </a>
        </h4>
      </div>
    </div>
  );
}

export { Footer };
