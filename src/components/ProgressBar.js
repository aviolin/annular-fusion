/**
 * Displays the progress bar.
 */

import React from 'react'

function ProgressBar(props) {
  return (
    <div className="progress_container">
      <div 
        id="progress-bar" 
        className="progress"
        style={{ width: props.percent * 100 + "%" }}
      > 
      </div>
    </div>
  )
}

export default ProgressBar