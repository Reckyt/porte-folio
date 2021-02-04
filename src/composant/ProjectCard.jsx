import React from "react";
import { Link } from "react-router-dom";

import "../css/ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className='container--project'>
      <h1 className='project--title'>{props.project.title}</h1>
      <Link to={{ pathname: `/project/${props.project.id}` }}>
        <img className='project--img' src={props.project.img} alt='projet' />
      </Link>
      <hr className='lign' />
    </div>
  );
}

export { ProjectCard };
