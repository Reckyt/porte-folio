import React from "react";

import wave1 from "../assets/img/wave1.svg";
import wave2 from "../assets/img/wave2.svg";

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
      <img alt='' src={wave1} className='wave1' />
      <img alt='' src={wave2} className='wave2' />
    </div>
  );
}

export { Ligthmotiv };
