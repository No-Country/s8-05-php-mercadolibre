import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://mercadocountry-app-eogs6.ondigitalocean.app',
});

apiClient.interceptors.request.use((config) => {
  config.headers.Accept = 'application/json';
  return config;
});

const apiClientPriv = axios.create({
  baseURL: 'https://mercadocountry-app-eogs6.ondigitalocean.app',
});

apiClientPriv.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (!token) return config;

  config.headers.Authorization = `Bearer ${token}`;
  config.headers.Accept = 'application/json';
  return config;
});

export { apiClient, apiClientPriv };
