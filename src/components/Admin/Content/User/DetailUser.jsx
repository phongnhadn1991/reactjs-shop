import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { getUser } from '../../../../services/apiService'

const DetailUser = (props) => {
    const { userid } = useParams();
    const [detailUser, setdetailUser] = useState([])

    const getUserByIdPrams = async () => {
        let res = await getUser(userid)
        if (res.data && res.status === 200) {
            setdetailUser(res.data)
        }
    }

    useEffect(() => {
        getUserByIdPrams();
    }, [])

    return (
        <div className='p-user_add'>
            <h4>User #{userid} <span><Link to='../users' className='btn btn-success btn-sm'>List User</Link></span></h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th key={detailUser.id} scope="row">{detailUser.id}</th>
                        <td>{detailUser.fullname}</td>
                        <td>{detailUser.email}</td>
                        <td>{detailUser.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailUser
