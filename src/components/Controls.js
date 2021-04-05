import React from 'react'

import Button from './Button'

function Controls(props) {
  const tag = props.control === true ? " All" : ""

  return (
    <div className={ props.control === true ? "controls all" : "controls"}>
      <Button 
        text={props.isPlaying ? "Stop" + tag : "Start" + tag} 
        onClick={props.btnHandler}
        id="local" />
    </div>
  )
}

export default Controls