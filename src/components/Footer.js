/**
 * Displays the footer.
 */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <a href="https://github.com/aviolin/annular-fusion" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon" />View the source on Github</a>
      </div>
      <p className="copyright">&copy; Arlo Adams, 2021</p>
    </footer>
  )
}

export default Footer