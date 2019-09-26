import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({ project }) => (
  <a href={project.dUrl} className="Project">
    <img src={`${project.title}.png`} alt={`${project.title} Image`}/>
    <div className="Label">
      <h3>{project.title}</h3>
      <a href={project.gUrl}><FontAwesomeIcon icon={faGithub}/>{project.gUrl.substring(18)}</a>
    </div>
    <div className="Description">
      <h3>
        { project.desc }
      </h3>
    </div>
    <div className="Tech">
      {
        project.tech.map((el, i) => (
          <div className="Tech-Item" key={`tech-${i}`}>
            {el}
          </div>
        ))
      }
    </div>
  </a>
);

export default Project;