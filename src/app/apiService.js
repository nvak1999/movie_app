import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.response.use(
  (request) => {
    return request;
  },
  function (error) {
    console.log("request error", error);
  }
);

export default apiService;
