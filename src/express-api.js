import axios from 'axios';
import cookies from 'js-cookie';
import {message} from 'antd';

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

function requestInterceptor(config) {
    let token = cookies.get('authtoken');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
}

function responseInterceptor(response) {
    if (response.data.token) {
        cookies.set('authtoken', response.data.token);
    }

    if (response.data.message) {
        message.info(response.data.message);
    }

    return response;
}

function responseErrorInterceptor(error) {
    if (error.response.data.message) {
        message.error(error.response.data.message);
    }

    return Promise.reject(error);
}

api.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
api.interceptors.request.use(requestInterceptor);

export default api;