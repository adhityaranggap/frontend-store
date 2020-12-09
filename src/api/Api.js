//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://shop.rumahinternet.id/api'
})

export default Api