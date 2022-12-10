import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Dashboard = (props) => {
    return (
        <div className='p-dashBoard'>
            <div className='p-dashBoard_top'>
                <h4>Manager user</h4>
                <div className='p-managerUser'>
                    <Link to='users' className='btn btn-sm btn-success'>View List User</Link> | <Link to='users/add' className='btn btn-sm btn-primary'>Add New User</Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default Dashboard;