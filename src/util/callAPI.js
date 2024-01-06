import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        // Check if the access token is present
        const accessToken = localStorage.getItem('auth_token');
        if (accessToken) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

export default api;
