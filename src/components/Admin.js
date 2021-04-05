import React from 'react'

const Admin = (props) => {
  return (
    <div className="admin">
      <label>
        <input 
          name="client-control" 
          type="checkbox"
          checked={props.control}
          onChange={props.controlHandler}  
        />
        &nbsp;Control all clients?
      </label>
      <p>{props.connection}</p>
    </div>
  )
}

export default Admin