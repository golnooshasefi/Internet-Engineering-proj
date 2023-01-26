import axios from "axios";
const baseUrl = "";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization:
      localStorage.getItem("access_token") !== null &&
      localStorage.getItem("access_token") !== undefined &&
      localStorage.getItem("access_toen") !== "undefined"
        ? "Bearer " + localStorage.getItem("access_token")
        : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
