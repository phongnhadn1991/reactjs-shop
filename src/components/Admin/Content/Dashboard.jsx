import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Dashboard = (props) => {
    return (
        <div className='p-dashBoard py-5'>
            <div className='container'>
                <h4>Manager user</h4>
                <div className='p-managerUser'>
                    <Link to='users'>list</Link> | <Link to='users/add'>add</Link>
                </div>
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;