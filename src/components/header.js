import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { ThemeToggle } from "./theme";

const Header = ({ dark, setDark, siteTitle, social = {} }) => (
  <div className="Header">
    <h2>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h2>
    <div className="Social">
      <a href={social.twitter}>
        <FontAwesomeIcon icon={faTwitterSquare}/>
        lkennxyz
      </a>
      <a href={social.github}>
        <FontAwesomeIcon icon={faGithubSquare}/>
        lkennxyz
      </a>
      <a href={social.linkedIn}>
        <FontAwesomeIcon icon={faLinkedin}/>
        lkennxyz
      </a>
    </div>
    <ThemeToggle dark={dark} setDark={setDark}/>
  </div>
)

Header.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
