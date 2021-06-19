import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

import data from './data'

const SectionList = (props) => {
  const sections = data.map(section => {
    let classes = "list-btn "
    if (props.curSection === section.id) {
      classes += "current"
    }
    if (props.curSection > section.id) {
      classes += "completed"
    }
    return (
      <li key={section.id}>
        <button 
          className={classes} 
          onClick={props.btnHandler}
          data-id={section.id}
        >
          <div>
            <span className="circle"></span>
            {section.section}&nbsp;
            {section.cycle}&nbsp;
            <span className="light">({section.duration}")</span>
          </div>
          {
            props.curSection === section.id && props.isPlaying ?
            <FontAwesomeIcon icon={faStop} />
            :
            <FontAwesomeIcon icon={faPlay} />
          }
        </button>
      </li>
    )
  })

  return (
    <div className="section-list">
      <ul>
        { sections }
      </ul>
    </div>
  )
}

export default SectionList