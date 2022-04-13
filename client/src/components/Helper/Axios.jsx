
import axios from "axios"

const baseURL = process.env.REACT_APP_BACKEND_URL;
const Axios = axios.create({
    baseURL: baseURL,
    withCredentials: true,
});

Axios.defaults.withCredentials = true;

export default Axios;
