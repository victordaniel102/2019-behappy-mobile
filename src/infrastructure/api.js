import axios from "axios";

import { getToken } from "./auth";

const url = "https://alaska-api.herokuapp.com:8000/";

const api = axios.create({
    baseURL: url
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
});

export default api;
