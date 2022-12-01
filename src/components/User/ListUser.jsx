import React, { useState, useEffect } from 'react'
import { getAllUser, getAllUserFilter } from '../../services/apiService'
import ReactPaginate from 'react-paginate';
import _ from 'lodash';

const ListUser = (props) => {
    const [listUser, setlistUser] = useState([])
    const [textSearch, settextSearch] = useState('')

    // int page
    const LIMIT_PER_PAGE = 10
    const [pageTotal, setpageToTal] = useState(1)
    const [curentPage, setcurentPage] = useState(0)

    const calculatorpageToTal = (total) => {
        setpageToTal(Math.ceil(total / LIMIT_PER_PAGE))
    }


    // Fetch total page by call api
    const fetchTotalPage = async () => {
        let res = await getAllUser()
        if (res.data && res.status === 200) {
            calculatorpageToTal(res.data.length)
        }
    }

    // Fetch user by filter search
    const fetchListUserFilter = async (curentPage = 1, limit = LIMIT_PER_PAGE, txtSearch) => {
        await getAllUserFilter(curentPage, limit, txtSearch)
            .then(res => {
                setlistUser(res.data)
            })
    }

    useEffect(() => {
        fetchListUserFilter()
    }, [])

    useEffect(() => {
        fetchTotalPage()
    }, [])

    const handlePageClick = async (event) => {
        let totalPage = await getAllUserFilter(null, null, _.lowerCase(textSearch))
        await getAllUserFilter(event.selected + 1, LIMIT_PER_PAGE, _.lowerCase(textSearch))
            .then(res => {
                setlistUser(res.data)
                calculatorpageToTal(totalPage.data.length)
            })
        setcurentPage(event.selected)
    };

    const onChangeInputSearch = (e) => {
        e.preventDefault()
        if (e.target.value === '') {
            fetchListUserFilter()
            fetchTotalPage()
        }
        settextSearch(e.target.value)
    }

    const submitFormSearch = async (e) => {
        e.preventDefault()

        await getAllUserFilter(null, null, _.lowerCase(textSearch))
            .then(res => {
                calculatorpageToTal(res.data.length)
            })

        await getAllUserFilter(1, LIMIT_PER_PAGE, _.lowerCase(textSearch))
            .then(res => {
                setlistUser(res.data)
            })

        setcurentPage(0)
    }

    return (
        <div className='p-listUser'>
            <h4>List User</h4>

            <form onSubmit={(e) => submitFormSearch(e)}>
                <div className="input-group mb-3">
                    <input onChange={(e) => onChangeInputSearch(e)} value={textSearch} type="text" className="form-control" placeholder="Search Name" aria-label="search Name" aria-describedby="button-addon2" />
                    <button onClick={(e) => { submitFormSearch(e) }} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
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
                        listUser.map((user) => {
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
            {
                pageTotal && pageTotal > 1 &&
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
                    forcePage={curentPage}
                />
            }

        </div>
    )
}

export default ListUser
