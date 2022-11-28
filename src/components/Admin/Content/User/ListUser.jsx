import React, { useState, useEffect } from 'react'
import { getAllUser } from '../../../../services/apiService'
import { Link } from "react-router-dom";

const ListUser = (props) => {

    const [listUser, setlistUser] = useState([])

    const fetchListUser = async () => {
        let res = await getAllUser()
        if(res.data && res.status === 200) {
            setlistUser(res.data)
        }
    }
    useEffect(() => {
        fetchListUser();
    }, [])

    return (
        <div className='p-listUser py-5'>
            <div className="container">
            <h4>List User <span><Link to='add' className='btn btn-primary btn-sm'>Add User</Link></span></h4>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((user, idx) => {
                            return (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <span><button className='btn btn-sm btn-success'>View</button> </span>
                                        <span><button className='btn btn-sm btn-warning'>Update</button> </span>
                                        <span><button className='btn btn-sm btn-danger'>Delete</button></span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td className='text-center' colSpan={4}>Not Found User</td>
                        </tr>
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default ListUser
