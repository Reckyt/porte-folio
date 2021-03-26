import React from "react";

import portrait from "../assets/img/media/Max.jpg";
import cv from "../assets/img/media/Maxime Lombardo - CV.pdf";

import "../css/About.css";

function About(props) {
  return (
    <div className='container--about'>
      <img className='about--img slide-in' src={portrait} alt='portrait' />
      <div className='about'>
        <div className='bio'>
          <p>
            Hello, my name is Maxime Lombardo and I'm web developer. After 9
            years as a cultural events technician, I converted to web
            development to participate in the technological innovations of
            tomorrow.
          </p>
          <p>
            I was born in Paris, But now I live in Bordeaux. I'm passionate
            about travels, films and series. I have so many movies that I have
            developed a personal streaming website.
          </p>
          <p>
            I graduate at Wild Code School where I discovered my passion for
            coding and algorithm problems solving. Since I continue to learn new
            languages and frameworks to develop my ideas.
          </p>
          <p
            className='contact--button'
            onClick={() => props.setOpen(!props.open)}>
            Contact me !
          </p>
        </div>
        <div className='container--personal'>
          <div className='personal'>
            <h4>PERSONAL CONTACT :</h4>
            <p>maxime.lombardo@gmail.com</p>
            <p>+336 98 15 85 82</p>
          </div>
          <div className='container--cv'>
            <a className='cv' href={cv} download>
              Upload my CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { About };
