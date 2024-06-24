// utils/api.js
import axios from 'axios';

const api = axios.create({
  // baseURL: '/api', // Adjust this if your API has a different base URL
  withCredentials: true, // This is important to include cookies in the request
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add any request modifications here, like adding headers
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error is due to an expired token (status 401) and we haven't retried yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Attempt to refresh the token
        await api.post('/rest-api/token/refresh');
        
        // If successful, retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh fails, redirect to login
        window.location.href = '/account/login';
        return Promise.reject(refreshError);
      }
    }

    // For other errors, just reject the promise
    return Promise.reject(error);
  }
);

export default api;