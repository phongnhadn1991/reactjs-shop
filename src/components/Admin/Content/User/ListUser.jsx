import React, { useState, useEffect } from 'react'
import { getAllUser, deleteUser } from '../../../../services/apiService'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

const ListUser = (props) => {

    const [listUser, setlistUser] = useState([])
    const history = useNavigate();

    const LIMIT_PER_PAGE = 10
    const [pageTotal, setpageTotal] = useState(1)

    const fetchListUser = async (curentPage) => {
        let res = await getAllUser(curentPage, LIMIT_PER_PAGE)
        if (res.data && res.status === 200) {
            setlistUser(res.data)
        }
    }

    const fetchTotalPage = async () => {
        let res = await getAllUser()
        if (res.data && res.status === 200) {
            setpageTotal(Math.ceil(res.data.length / LIMIT_PER_PAGE))
        }
    }

    useEffect(() => {
        fetchListUser()
    }, [])

    useEffect(() => {
        fetchTotalPage()
    }, [])

    const deleteUserByID = async (id) => {
        let data = listUser.filter((user) => user.id !== id)
        toast.success('Deleted User')
        setlistUser(data)
        await deleteUser(id)
    }

    const handlePageClick = (event) => {
        fetchListUser(event.selected + 1);
    };

    return (
        <div className='p-listUser'>
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
                        listUser.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <span><button onClick={() => history(`${user.id}`)} className='btn btn-sm btn-success'>View</button> </span>
                                        <span><button onClick={() => history(`edit/${user.id}`)} className='btn btn-sm btn-warning'>Update</button> </span>
                                        <span><button onClick={() => deleteUserByID(user.id)} className='btn btn-sm btn-danger'>Delete</button></span>
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
            <ReactPaginate
                nextLabel="Next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageTotal}
                previousLabel="< Prev"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default ListUser
