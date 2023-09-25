import React from "react";
import DashBoard from "./DashBoard";
import { useNavigate } from "react-router-dom";

const withAuth = (props) => {
  return (props) => {
    const navigate = useNavigate();

    const token = localStorage.getItem("accessToken");

    if (!token) {
      // Nếu không có token, chuyển hướng đến trang đăng nhập
      navigate("/login");
      return null;
    }

    // Nếu có token, render component WrappedComponent
    return <DashBoard {...props} />;
  };
};

export default withAuth;
