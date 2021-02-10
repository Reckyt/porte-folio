import React from "react";

import { Ligthmotiv, ProjectCard, Skills } from "../component";

import "../css/Home.css";

function Home(props) {
  const renderProjectList = () => {
    return props.ApiProjects.map((project, i) => {
      return <ProjectCard key={i} project={project} />;
    });
  };

  return (
    <div className='main--container'>
      <section
        className='
      '>
        <Ligthmotiv />
      </section>
      <section>
        <div class='parallax one'>
          <h1>MES COMPÉTENCES</h1>
        </div>
      </section>
      <Skills />
      <section>
        <div class='parallax two'>
          <h1>MES PROJETS</h1>
        </div>
      </section>
      <div id='section1' className='container--projectList'>
        {renderProjectList()}
      </div>
    </div>
  );
}

export { Home };
