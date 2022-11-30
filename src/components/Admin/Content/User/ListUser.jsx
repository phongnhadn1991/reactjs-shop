import React, { useState, useEffect } from 'react'
import { getAllUser, deleteUser } from '../../../../services/apiService'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import ReactPaginate from 'react-paginate';

const ListUser = (props) => {

    const [listUserAll, setlistUserAll] = useState([])
    const [listUser, setlistUser] = useState([])
    const history = useNavigate();

    const LIMIT_PER_PAGE = 3
    const [pageCount, setPageCount] = useState(1);
    const pageTotal = Math.ceil(listUserAll.length / LIMIT_PER_PAGE);

    const fetchListUser = async () => {
        let res = await getAllUser(pageCount,LIMIT_PER_PAGE)
        if (res.data && res.status === 200) {
            setlistUser(res.data)
        }
    }

    const fetchAllListUser = async () => {
        let res = await getAllUser()
        if (res.data && res.status === 200) {
            setlistUserAll(res.data)
        }
    }

    useEffect(() => {
        fetchListUser();
    }, [])

    useEffect(() => {
        fetchAllListUser()
    }, [])

    const deleteUserByID = async (id) => {
        let data = listUser.filter((user) => user.id !== id)
        toast.success('Deleted User')
        setlistUser(data)
        await deleteUser(id)
    }

    const handlePageClick = (event) => {
        console.log(`User requested page number ${event.selected + 1}`);
        setPageCount(event.selected + 1)
        fetchListUser();
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
                        listUser.map((user, idx) => {
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
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageTotal}
                previousLabel="< previous"
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
