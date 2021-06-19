import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="nav">
      <div className="logo">
        <FontAwesomeIcon icon={faStopwatch} className="icon" />
        Synch Timer
      </div>
      <div className="room">
        {/* <FontAwesomeIcon icon={faArrowAltCircleLeft} className="icon" />
        Room: 1439 */}
      </div>
    </header>
  )
}

export default Header;