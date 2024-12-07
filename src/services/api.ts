import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "127.0.0.1:4500",
});

export default axiosInstance;
