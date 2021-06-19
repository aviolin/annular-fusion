import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

function Controls(props) {
  const tag = props.control === true ? " All" : ""
  const playText = <><FontAwesomeIcon icon={faPlay} className="icon" />&nbsp;&nbsp;&nbsp;Start {tag}</>
  const stopText = <><FontAwesomeIcon icon={faPause} className="icon" />&nbsp;&nbsp;&nbsp;Stop {tag}</>

  return (
    <div className={ props.control === true ? "controls all" : "controls"}>
      <Button 
        text={props.isPlaying ? stopText : playText} 
        onClick={props.btnHandler}
        id="local" />
    </div>
  )
}

export default Controls