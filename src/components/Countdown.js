/**
 * Displays the progress bar as well as the 
 * information around it.
 */

import React from 'react'
import data from './data'
import ProgressBar from './ProgressBar'

function Countdown(props) {
  return (
    <div className="countdown">
      <p className="timer">
        {
          data[props.curSection] ?
          <>{Math.trunc(props.timer * 10) / 10} seconds</>
          :
          <>&nbsp;</>
        }
      </p>
      <ProgressBar percent={props.percent}/>
      <p className="section-title">
        {
          data[props.curSection] &&
          <>
            <span className="light">Now:</span> <b>{data[props.curSection]?.section}&nbsp;
            {data[props.curSection]?.cycle}&nbsp;
            ({data[props.curSection]?.duration}")</b>
          </>
        }
        
      </p>
      <p className="section-next">
        {
          data[props.curSection+1] &&
          <>
            <span className="light">Next:</span> <b>{data[props.curSection+1]?.section}&nbsp;
            {data[props.curSection+1]?.cycle}&nbsp;
            ({data[props.curSection+1]?.duration}")</b>
          </>
        }
      </p>
    </div>
  )
}

export default Countdown