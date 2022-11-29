import axios from '../utils/axiosCustomize'

const postCreateNewUser = (fullname, email, phone) => {
    let data = {
        fullname: fullname,
        email: email,
        phone: phone
    }
    return axios.post('users', data)
}

const getAllUser = () => {
    return axios.get('users')
}

const deleteUser = (id) => {
    return axios.delete(`users/${id}`)
}

const getUser = (id) => {
    return axios.get(`users/${id}`)
}

export { postCreateNewUser, getAllUser, deleteUser, getUser }