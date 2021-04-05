import React from 'react'

import data from './data'

const SectionList = (props) => {
  const sections = data.map(section => {
    let classes = "btn-link "
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
          {section.section}&nbsp;
          {section.cycle}&nbsp;
          ({section.duration}")
        </button>
      </li>
    )
  })

  return (
    <div className="section_list">
      <ol>
        { sections }
      </ol>
    </div>
  )
}

export default SectionList