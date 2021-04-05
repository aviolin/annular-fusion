import React from 'react'

import data from './data'
import ProgressBar from './ProgressBar'

function Countdown(props) {
  return (
    <div className="countdown">
      <p className="section_title">
        {data[props.curSection]?.section}&nbsp;
        {data[props.curSection]?.cycle}&nbsp;
        ({data[props.curSection]?.duration}")
      </p>
      <p className="timer">
        {Math.trunc(props.timer * 10) / 10} seconds
      </p>
      <ProgressBar percent={props.percent}/>
      <p className="section_next">
        Next: {data[props.curSection+1]?.section}&nbsp;
              {data[props.curSection+1]?.cycle}&nbsp;
              ({data[props.curSection+1]?.duration}")
      </p>
    </div>
  )
}

export default Countdown