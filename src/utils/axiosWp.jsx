import axios from 'axios'

const axiosWp = axios.create({
    baseURL: 'http://deliviet.mcntestsv.ga/wp-json/'
})

export default axiosWp