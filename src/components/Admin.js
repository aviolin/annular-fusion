import React from 'react'

const Admin = (props) => {
  return (
    <div className="admin">
      {/* <label>
        <input 
          name="solo-control" 
          type="checkbox"
          checked={props.isSolo}
          onChange={props.controlHandler}  
        />
        &nbsp;Solo? (ONLY tick when practicing by yourself. Page will NOT be updated by the server when ticked.)
      </label><br/> */}
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