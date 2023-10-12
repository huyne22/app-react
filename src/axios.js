import jwt_decode from "jwt-decode";
import axios from "axios";
import NProgress from "nprogress";
import { store } from "./redux/store";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// async function getAccessTokenFromCookie() {
//   const cookieName = "access_token";
//   const cookieValue = document.cookie
//     .split("; ")
//     .find((row) => row.startsWith(`${cookieName}=`));
//   if (cookieValue) {
//     return cookieValue.split("=")[1];
//   }
//   return null;
// }

instance.interceptors.request.use(
  async (config) => {
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
    console.log(response);
    return response && response.data ? response.data : response;
  },
  (error) => {
    NProgress.done();
    if (error.response) {
      console.log(error.response);
      // Kiểm tra nếu mã lỗi là 403 (Forbidden)
      if (error.response.status === 403) {
        // Xử lý lỗi 403 ở đây
        alert("Bạn không có quyền truy cập!");
        // Hiển thị thông báo hoặc thực hiện xử lý khác
      } else {
        // Xử lý các mã lỗi khác
        console.error(
          "Request failed with status code:",
          error.response.status
        );
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);

export default instance;
