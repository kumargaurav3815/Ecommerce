/** @format */
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // 🔑 needed for login, logout, checkAuth
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
