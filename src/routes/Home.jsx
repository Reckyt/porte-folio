import React from "react";
import { ProjectCard } from "../composant";

import "../css/Home.css";

function Home(props) {
  const renderProjectList = () => {
    return props.ApiProjects.map((project, i) => {
      return <ProjectCard key={i} project={project} />;
    });
  };

  return (
    <div className=''>
      <div className='home'>
        <div className='container--intro'>
          <h1>Let's work together</h1>
          <p>Hi, i'm Maxime web developer based in Bordeaux</p>
        </div>
        <div className='explore'>
          <h5>Explore projects</h5>
          <a href='#section1'>
            <i class='arrow down' />
          </a>
        </div>
      </div>
      <div id='section1' className='container--projectList'>
        {renderProjectList()}
      </div>
    </div>
  );
}

export { Home };
