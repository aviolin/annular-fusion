import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Admin = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin">
      <header>
        <button className="admin-toggle-btn" onClick={() => setIsOpen(prev => !prev)}>
          <span>Admin</span>

          {
            isOpen ? 
            <FontAwesomeIcon icon={faAngleUp} />
            :
            <FontAwesomeIcon icon={faAngleDown} />
          }
        </button>
      </header>
      {
        isOpen &&
        <div>
          <label>
            <input 
              name="client-control" 
              type="checkbox"
              checked={props.control}
              onChange={props.controlHandler}  
            />
            Control all clients?
          </label>
          <p className="clients">{props.connection}</p>
          <p className="what"><FontAwesomeIcon icon={faQuestionCircle} className="icon"/>What is this?</p>
          <p>Each musician should open this webpage on a device. One musician will check the box above, and when they hit "Start", each user's timer will begin synchronously*. You can test this by opening the app in multiple windows or on multiple devices.</p>
          <p className="footnote">* Within some milliseconds. The delay ultimately depends on your internet connection.</p>
        </div>
      }
    </div>
  )
}

export default Admin