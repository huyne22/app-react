import axios from "axios";
import _ from "lodash";
import NProgress from "nprogress";
import { store } from "./redux/store";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});
const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
});

instance.defaults.withCredentials = true;
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.request.use(
  (config) => {
    NProgress.start();

    return config;
  },
  (error) => {
    NProgress.start();

    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    NProgress.done();

    return response && response.data ? response.data : response;
  },
  (error) => {
    NProgress.done();

    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);

export default instance;
