import React from "react";

import "../css/ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className='container--project'>
      <h1 className='project--title'>{props.project.title}</h1>
      <p className='project--description'>{props.project.description}</p>
      <img className='project--img' src={props.project.img} alt='projet' />
      <hr className='lign' />
    </div>
  );
}

export { ProjectCard };
