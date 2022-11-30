import React, { memo, useRef } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import AdminPage from '../pages/AdminPage';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';

import Dashboard from '../components/Admin/Content/Dashboard'
import AddUser from '../components/Admin/Content/User/AddUser';
import ListUser from '../components/Admin/Content/User/ListUser';
import DetailUser from '../components/Admin/Content/User/DetailUser';
import UpdateUser from '../components/Admin/Content/User/UpdateUser';

const RouterPage = () => {
    const mainPageRef = useRef()
    const location = useLocation()
    return (
        <div ref={mainPageRef} className="main-page">
            <div className="container-full">
                <Routes>
                    <Route location={location} key={location.pathname} >
                        <Route index element={<HomePage />} />
                        {/* Admin */}
                        <Route path='/admin' element={<AdminPage />}>
                            <Route index element={<Dashboard />} />
                            <Route path='users' element={<ListUser />} />
                            <Route path='users/add' element={<AddUser />} />
                            <Route path='users/:userid' element={<DetailUser />} />
                            <Route path='users/edit/:userid' element={<UpdateUser />} />
                        </Route>
                        {/* End Admin */}
                        <Route path='/user' element={<UserPage />} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default memo(RouterPage)