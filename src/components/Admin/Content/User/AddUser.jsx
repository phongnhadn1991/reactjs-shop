import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../../services/apiService'
import { Link } from "react-router-dom";

const AddUser = (props) => {

    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')

    const clearForm = () => {
        setfullname('')
        setemail('')
        setphone('')
    }

    const onchangeFullname = (e) => {
        setfullname(e.target.value)
    }
    const onchangeEmail = (e) => {
        setemail(e.target.value)
    }
    const onchangePhoneName = (e) => {
        setphone(e.target.value)
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const addNewUser = async (e) => {
        e.preventDefault()
        // validate

        if (!fullname) {
            toast.warn('Invalid full name')
            return
        }

        const isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.warn('Invalid email')
            return
        }

        if (!phone) {
            toast.warn('Invalid phone')
            return
        }

        // call apis
        let res = await postCreateNewUser(fullname, email, phone)
        if (res.data && res.status === 201) {
            clearForm()
            toast.success('Created User')
        }

    }

    return (
        <div className='p-user_add'>
            <h4>Add New User <span><Link to='../users' className='btn btn-success btn-sm'>List User</Link></span></h4>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="inputFullName">Full Name</label>
                    <input className="form-control" id="inputFullName" onChange={(e) => onchangeFullname(e)} value={fullname} type="text" placeholder='fullname' />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputEmail">Email</label>
                    <input className="form-control" id="inputEmail" onChange={(e) => onchangeEmail(e)} value={email} type="text" placeholder='email' />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="inputPhone">Phone</label>
                    <input className="form-control" id="inputPhone" onChange={(e) => onchangePhoneName(e)} value={phone} type="text" placeholder='phone' />
                </div>
                <button className='btn btn-primary' onClick={(e) => { addNewUser(e) }}>Add User</button>
            </form>
        </div>
    )
}

export default AddUser
