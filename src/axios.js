import axios from "axios";
const baseUrl = "";
const hasAuthorization =
  localStorage.getItem("access_token") !== null &&
  localStorage.getItem("access_token") !== undefined &&
  localStorage.getItem("access_toen") !== "undefined" &&
  localStorage.getItem("access_toen") !== "";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    ...(hasAuthorization
      ? { Authorization: "Bearer " + localStorage.getItem("access_token") }
      : {}),
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
