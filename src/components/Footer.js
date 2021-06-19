import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle  } from '@fortawesome/free-solid-svg-icons';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="links">
        {/* <a href="#"><FontAwesomeIcon icon={faQuestionCircle} className="icon" />What is this?</a> */}
        <a href="https://github.com/aviolin/annular-fusion" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon" />View the source on Github</a>
      </div>
      <p className="copyright">&copy; Arlo Adams, 2021</p>
    </footer>
  )
}

export default Footer;