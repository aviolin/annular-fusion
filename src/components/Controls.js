/**
 * Contains the main start/stop button.
 */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
  const tag = props.control === true ? " All" : ""
  const playText = <><FontAwesomeIcon icon={faPlay} className="icon" />&nbsp;&nbsp;&nbsp;Start {tag}</>
  const stopText = <><FontAwesomeIcon icon={faPause} className="icon" />&nbsp;&nbsp;&nbsp;Stop {tag}</>

  return (
    <div className={ props.control === true ? "controls all" : "controls"}>
      <button 
        onClick={props.btnHandler} 
        id="local"
      >
        {props.isPlaying ? stopText : playText} 
      </button>
    </div>
  )
}

export default Controls