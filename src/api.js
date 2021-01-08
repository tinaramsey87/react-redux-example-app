import axios from 'axios';
import {message} from 'antd';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

function requestInterceptor(config) {
    config.headers.Authorization = 'Bearer getfucked';
    return config;
}

function responseInterceptor(response) {
    message.info('Got response!');
    return response;
}

function responseErrorInterceptor(error) {
    message.error('UH OH');
    return Promise.reject(error);
}

api.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
api.interceptors.request.use(requestInterceptor);

export default api;
