import React from "react";

import "../css/Ligthmotiv.css";

export default function Ligthmotiv() {
  return (
    <div className='container--home'>
      <div className='background--home'>
        <div className='container--intro'>
          <h1>Let's work together</h1>
          <p>Hi, I'm Maxime web developer based in Bordeaux</p>
        </div>
        <div className='explore'>
          <h5>Explore projects</h5>
          <a href='#section1'>
            <i class='arrow down' />
          </a>
        </div>
      </div>
      <svg
        className='waveTop'
        xmlns='http://www.w3.org/2000/svg'
        x='1000px'
        y='1000px'
        viewBox='0 0 1000 1000'>
        <path></path>
      </svg>
      <svg
        className='waveBottom'
        xmlns='http://www.w3.org/2000/svg'
        x='1000px'
        y='1000px'
        viewBox='0 0 1000 1000'>
        <path></path>
      </svg>
    </div>
  );
}

export { Ligthmotiv };
