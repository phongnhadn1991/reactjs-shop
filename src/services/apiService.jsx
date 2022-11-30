import axios from '../utils/axiosCustomize'

const postCreateNewUser = (fullname, email, phone) => {
    let data = {
        fullname: fullname,
        email: email,
        phone: phone
    }
    return axios.post('users', data)
}

const updateNewUser = (id,fullname, email, phone) => {
    let data = {
        fullname: fullname,
        email: email,
        phone: phone
    }
    return axios.put(`users/${id}`, data)
}

const getAllUser = (page, limit) => {
    const p = (page) ? page : 1
    const lm = (limit) ? limit : -1
    return axios.get(`users?page=${p}&limit=${lm}`)
}

const deleteUser = (id) => {
    return axios.delete(`users/${id}`)
}

const getUser = (id) => {
    return axios.get(`users/${id}`)
}

const getAllUserFilter = (page, limit, fullname) => {
    const p = (page) ? page : ''
    const lm = (limit) ? limit : -1
    const fn = (fullname) ? fullname : ''
    return axios.get(`users?page=${p}&limit=${lm}&fullname=${fn}`)
}

export { postCreateNewUser, getAllUser, deleteUser, getUser, updateNewUser, getAllUserFilter}