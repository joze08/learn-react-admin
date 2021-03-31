import axios from 'axios';

const api = axios.create({
    baseURL: "https://apilearnreact.herokuapp.com/"
})

export default api;