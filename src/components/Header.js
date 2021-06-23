/**
 * Displays the header.
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="nav">
      <div className="logo">
        <FontAwesomeIcon icon={faStopwatch} className="icon" />
        Synch Timer
      </div>
      <div></div>
    </header>
  )
}

export default Header;