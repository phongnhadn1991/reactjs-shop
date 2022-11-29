import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import User from './components/User/User'
import Admin from './components/Admin/Admin'
import HomePage from './components/Home/HomePage';

import Dashboard from './components/Admin/Content/Dashboard'
import AddUser from './components/Admin/Content/User/AddUser';
import ListUser from './components/Admin/Content/User/ListUser';
import DetailUser from './components/Admin/Content/User/DetailUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='/users' element={<User />} />
        <Route path='/admins' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='users' element={<ListUser />} />
          <Route path='users/add' element={<AddUser />} />
          <Route path='users/:id' element={<DetailUser />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
