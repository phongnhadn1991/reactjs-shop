import React, { useState, useEffect } from 'react'
import { getAllUser } from '../../services/apiService'
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

const ListUser = (props) => {
    const [listUserAll, setlistUserAll] = useState([])
    const [listUser, setlistUser] = useState([])
    const [textSearch, settextSearch] = useState('')

    
    
    const LIMIT_PER_PAGE = 10
    const pageTotal = Math.ceil(listUserAll.length / LIMIT_PER_PAGE);

    const fetchListUser = async (curentPage) => {
        let res = await getAllUser(curentPage,LIMIT_PER_PAGE)
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

    const handlePageClick = (event) => {
        console.log(`User requested page number ${event.selected + 1}`);
        fetchListUser(event.selected + 1);
    };

    const submitFormSearch = () => {
        console.log('>>>',_.includes(listUser, { 'id' : '1'} ));
    }

    return (
        <div className='p-listUser'>
            <h4>List User</h4>

            <form>
                <div className="input-group mb-3">
                    <input onChange={(e) => settextSearch(e.target.value)} value={textSearch} type="text" className="form-control" placeholder="Search Name" aria-label="search Name" aria-describedby="button-addon2" />
                    <button onClick={() => { submitFormSearch() }} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </form>

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
