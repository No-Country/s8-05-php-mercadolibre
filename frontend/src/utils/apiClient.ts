import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8000/api",
});

const apiClientPriv = axios.create({
  baseURL: "http://localhost:8000/api",
});

apiClientPriv.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (!token) return config;

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export { apiClientPriv };
