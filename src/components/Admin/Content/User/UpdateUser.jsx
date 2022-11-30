import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { updateNewUser, getUser } from '../../../../services/apiService'
import { useParams, Link } from "react-router-dom";

const UpdateUser = (props) => {
    const { userid } = useParams();

    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')

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

    const updateNewUserById = async (e) => {
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
        let res = await updateNewUser(userid, fullname, email, phone)
        if (res.data && res.status === 200) {
            toast.success('Updated User')
            setfullname(fullname)
            setemail(email)
            setphone(phone)
        }

    }

    const getUserByIdPrams = async (userid) => {
        let res = await getUser(userid)
        if (res.data && res.status === 200) {
            setfullname(res.data.fullname)
            setemail(res.data.email)
            setphone(res.data.phone)
        }
    }

    useEffect(() => {
        getUserByIdPrams(userid)
    }, [userid])

    return (
        <div className='p-user_add'>
            <h4>Edit User #{userid} <span><Link to='../users' className='btn btn-success btn-sm'>List User</Link></span></h4>
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
                <button className='btn btn-primary' onClick={(e) => { updateNewUserById(e) }}>Update User</button>
            </form>
        </div>
    )
}

export default UpdateUser
