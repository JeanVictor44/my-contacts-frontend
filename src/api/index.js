import Axios from 'axios';

export const MycontactsApi = Axios.create({
    baseURL: "http://localhost:3000"
})
