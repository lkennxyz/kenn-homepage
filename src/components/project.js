import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({ project }) => (
  <div href={project.dUrl} className="Project">
    <div className="Label">
      <h4>{project.title}</h4>
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
  </div>
);

export default Project;