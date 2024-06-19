import axios from 'axios';
import React from 'react'

const defaultNodeApi = () => {
  const api = axios.create({
    baseURL: '', // Base URL for the API
    // timeout: 10000, // Request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json', // Default content type
        // 'Content-Type': 'multipart/form-data', // For file uploads
        'Accept': 'application/json' // Accept header
    },
    // withCredentials: true // Enable cross-site Access-Control requests
  });
  return api;
}

export default defaultNodeApi