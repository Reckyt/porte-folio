import React from "react";

import { Carousel } from "../component";

import background from "../assets/img/projects/maxflix/MaxFlix.png";
import react from "../assets/img/techno/react.png";
import redux from "../assets/img/techno/redux.png";
import node from "../assets/img/techno/node.png";

import "../css/Project.css";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function Project() {
  return (
    <div className='container--project'>
      <img className='background--project' src={background} alt='background' />
      <h1>Maxflix</h1>
      <div className='description--project'>
        <p>
          Streaming site bringing together a large selection of films that I
          love
        </p>
        <h2 className='title--technos'>Technologies used :</h2>
        <div className='technos--project'>
          <figure>
            <img src={react} className='techno--logo' alt='react' />
            <figcaption>React</figcaption>
          </figure>
          <figure>
            <img src={redux} className='techno--logo' alt='redux' />
            <figcaption>Redux</figcaption>
          </figure>
          <figure>
            <img src={node} className='techno--logo' alt='redux' />
            <figcaption>Redux</figcaption>
          </figure>
          <figure>
            <img src={redux} className='techno--logo' alt='redux' />
            <figcaption>Redux</figcaption>
          </figure>
        </div>
        <Carousel slides={slides} className='carousel' />
        <img src='' alt='screenshot' />
        <img src='' alt='screenshot' />
        <img src='' alt='screenshot' />
      </div>
    </div>
  );
}

export { Project };
