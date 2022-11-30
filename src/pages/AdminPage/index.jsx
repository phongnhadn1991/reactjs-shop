import React from 'react'
import { Outlet } from "react-router-dom";

const AdminPage = (props) => {
  return (
    <div className='l-adminpage'>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminPage