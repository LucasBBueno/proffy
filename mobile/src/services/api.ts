import axios from 'axios';

const api = axios.create({
    baseURL: 'http://XXX.XXX.XX.XX:3333'
})

export default api;