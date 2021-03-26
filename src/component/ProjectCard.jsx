import React, { useState } from "react";
import { Link } from "react-router-dom";

import eye from "../assets/img/design/visibility.svg";

import "../css/ProjectCard.css";

function ProjectCard(props) {
  const [overlay, setOverlay] = useState(false);

  const mouseEnter = () => {
    setOverlay(!overlay);
  };
  const mouseLeave = () => {
    setOverlay(!overlay);
  };
  return (
    <div className='container--projectCard'>
      <h1 className='project--title'>{props.project.title}</h1>
      <Link
        to={{ pathname: `/project/${props.project.id}` }}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}>
        <img
          className={overlay ? "project--img hide" : "project--img"}
          src={props.project.img}
          alt='projet'
        />
        <img
          className={overlay ? "eye--img" : "eye--img--hide"}
          src={eye}
          alt='eye'
        />
      </Link>
      <hr className='lign' />
    </div>
  );
}

export { ProjectCard };
