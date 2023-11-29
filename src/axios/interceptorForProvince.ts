import axios from "axios";

const axiosInterceptorForProvince = axios.create({
  baseURL: "https://provinces.open-api.vn/api",
});

axiosInterceptorForProvince.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosInterceptorForProvince.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    Promise.reject(err);
  }
);

export { axiosInterceptorForProvince };
