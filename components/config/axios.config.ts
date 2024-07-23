import axios from "axios";
import { getCookie } from "cookies-next";
import { API_URL } from "@/lib/api";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true, 
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Cookie"] = token; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
   
    return Promise.reject(error);
  }
);

export default instance;
