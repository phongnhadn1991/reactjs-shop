import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Admin = (props) => {
    return (
        <div>
            <div className='p-managerUser'>
                <Link to='manager-user'>Manager User</Link>
            </div>
            <Outlet />
        </div>
    );
}

export default Admin;