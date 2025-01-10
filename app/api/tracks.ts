import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api", // Corrected the colon in the URL
});
