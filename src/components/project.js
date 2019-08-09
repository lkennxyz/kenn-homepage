import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({project}) => (
  <a href={project.dUrl} className="Project">
    <img alt={project.dUrl} src={`${project.title}.png`}/>
    <div className="Info">
      <h4>{project.title}</h4>
      <a href={project.gUrl}><FontAwesomeIcon icon={faGithub}/></a>
    </div>
  </a>
);

export default Project;