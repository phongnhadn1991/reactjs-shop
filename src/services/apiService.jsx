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

export { postCreateNewUser, getAllUser }