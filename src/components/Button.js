import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick} id={props.id}>
      {props.text}
    </button>
  )
}

export default Button