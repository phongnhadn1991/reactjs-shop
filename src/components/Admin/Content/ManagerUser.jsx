import React, { useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManagerUser = (props) => {

    const [fullNameUser, setfullNameUser] = useState('')
    const [emailUser, setemailUser] = useState('')
    const [phoneUser, setphoneUser] = useState('')

    const clearForm = () => {
        setfullNameUser('')
        setemailUser('')
        setphoneUser('')
    }

    const onchangeFullNameUser = (e) => {
        setfullNameUser(e.target.value)
    }
    const onchangeEmailUser = (e) => {
        setemailUser(e.target.value)
    }
    const onchangePhoneNameUser = (e) => {
        setphoneUser(e.target.value)
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

        if(!fullNameUser) {
            toast.warn('Invalid full name')
            return
        }

        const isValidEmail = validateEmail(emailUser)
        if(!isValidEmail) {
            toast.warn('Invalid email')
            return
        }

        if(!phoneUser) {
            toast.warn('Invalid phone')
            return
        }

        let dataForm = {
            fullname: fullNameUser,
            email: emailUser,
            phone: phoneUser
        }
        // call apis
        console.log('>>> form data:', dataForm);
        let res = await axios.post('https://6177a06f9c328300175f5a35.mockapi.io/users', dataForm)
        if(res.data && res.status === 201) {
            clearForm()
            toast.success('Created User')
        }
        
    }

    return (
        <div>
            ManagerUser
            <div>
            <button className='btn btn-primary'>Add User</button>
            </div>
            <form >
                <div className='col-md-4'>
                    <input onChange={(e) => onchangeFullNameUser(e)} value={fullNameUser} type="text" placeholder='fullname' />
                </div>
                <div className='col-md-4'>
                <input onChange={(e) => onchangeEmailUser(e)} value={emailUser} type="text" placeholder='email' />
                </div>
                <div className='col-md-4'>
                <input onChange={(e) => onchangePhoneNameUser(e)} value={phoneUser} type="text" placeholder='phone' />
                </div>
                <button onClick={(e) => { addNewUser(e) }}>Add</button>
            </form>

            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            <ToastContainer />
        </div>
    );
}

export default ManagerUser;