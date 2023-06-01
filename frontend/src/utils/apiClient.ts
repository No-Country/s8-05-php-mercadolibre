import axios from 'axios';
import { API_ROUTE } from '../../config';

const apiClient = axios.create({
  baseURL: API_ROUTE,
});

apiClient.interceptors.request.use((config) => {
  config.headers.Accept = 'application/json';
  return config;
});

const apiClientPriv = axios.create({
  baseURL: API_ROUTE,
});

apiClientPriv.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (!token) return config;

  config.headers.Authorization = `Bearer ${token}`;
  config.headers.Accept = 'application/json';
  return config;
});

export { apiClient, apiClientPriv };
