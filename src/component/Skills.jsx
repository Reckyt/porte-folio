import React from "react";

import "../css/Skills.css";

function Skills() {
  return (
    <div className='container--skills'>
      <div className='domaines'>
        <h2>Domaines de compétences</h2>
        <div className='skill--block'>
          <h3>Concept et cahier des charges</h3>
          <p>
            Recherche et conception de fonctionnalités en adéquation avec vos
            objectifs
          </p>
        </div>
        <div className='skill--block'>
          <h3>Dévelopement</h3>
          <p>
            Programmation, integration et dévelopement conformes aux règles du
            clean code
          </p>
        </div>
        <div className='skill--block'>
          <h3>Base de données</h3>
          <p>Conception de base de données relationnelles</p>
        </div>

        <div className='skill--block'>
          <h3>Design web responsive</h3>
          <p>Adaptation multi-supports de votre site internet</p>
        </div>
      </div>
      <div className='development'>
        <h2>Compétences en developement</h2>
        <div className='container--progress--bar'>
          <div className='progress--bar' style={{ width: "80%" }}>
            <p>React JS</p>
          </div>
        </div>
        <div className='container--progress--bar'>
          <div className='progress--bar' style={{ width: "70%" }}>
            <p>Redux</p>
          </div>
        </div>
        <div className='container--progress--bar'>
          <div className='progress--bar' style={{ width: "50%" }}>
            <p>Vue JS</p>
          </div>
        </div>
        <div className='container--progress--bar'>
          <div className='progress--bar' style={{ width: "50%" }}>
            <p>Node JS</p>
          </div>
        </div>
        <div className='container--progress--bar'>
          <div className='progress--bar' style={{ width: "80%" }}>
            <p>HTML / CSS</p>
          </div>
        </div>
        <div className='container--progress--bar'>
          <div className='progress--bar' style={{ width: "30%" }}>
            <p>PHP</p>
          </div>
        </div>
        <div className='container--progress--bar'>
          <div className='progress--bar' style={{ width: "50%" }}>
            <p>MySQL</p>
          </div>
        </div>
        <div className='container--progress--bar'>
          <div className='progress--bar' style={{ width: "25%" }}>
            <p>.net - C#</p>
          </div>
        </div>
        <div className='container--progress--bar'>
          <div className='progress--bar' style={{ width: "25%" }}>
            <p>JAVA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Skills };
