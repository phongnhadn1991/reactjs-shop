import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getUser } from '../../../../services/apiService'

const DetailUser = (props) => {
    const { idPrams } = useParams()
    const [detailUser, setdetailUser] = useState([])

    const getUserByIdPrams = async (idPrams) => {
        console.log(idPrams);
        let res = await getUser(idPrams)
        if(res.data && res.status === 200) {
            setdetailUser(res.data)
        }
    }

    useEffect(() => {
        getUserByIdPrams();
    }, [])

  return (
    <div className='p-user_add py-5'>
            <div className="container">
                <h4>User #{idPrams}</h4>
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
                            <th scope="row">{ detailUser.id }</th>
                            <td>{ detailUser.fullname }</td>
                            <td>{ detailUser.email }</td>
                            <td>{ detailUser.phone }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default DetailUser
