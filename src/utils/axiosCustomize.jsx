import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://6177a06f9c328300175f5a35.mockapi.io/'
})

export default instance