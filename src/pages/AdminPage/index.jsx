import { useEffect } from 'react'
import { Outlet } from "react-router-dom";

const AdminPage = (props) => {
  useEffect(() => {
    document.title = 'Admin Page';
  }, []);

  return (
    <div className='l-adminpage'>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminPage