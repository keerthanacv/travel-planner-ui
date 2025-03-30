import React from 'react'
import axios from 'axios'
import store  from '../store/store'

const axiosInstance = axios.create({
    baseURL : 'http://localhost:8080',
    headers:{
      "Content-Type": "application/json",
    }
})
axiosInstance.interceptors.request.use(function (config) {
  const state = store.getState();
  const accessToken = state.accessToken;
  if(accessToken){
  config.headers["Authorization"] = `Bearer ${accessToken}`
  }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axiosInstance.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosInstance