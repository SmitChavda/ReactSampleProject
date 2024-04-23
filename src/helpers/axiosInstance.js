import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/", // add base url here
  headers: {}, // add custom headers here
  // other configurations
});

//Create axios interceptors here

export default axiosInstance;
