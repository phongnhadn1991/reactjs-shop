import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = (props) => {
    return (
        <div>
            <div className='p-managerUser'>
                <Link to='manager-user'>Manager User</Link>
            </div>
            <Outlet />

            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="light"
            />
            <ToastContainer />
        </div>
    );
}

export default Admin;