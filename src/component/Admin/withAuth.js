import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const withAuth = (WrappedComponent) => {
  const WithAuthComponent = (props) => {
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state?.user?.isAuth);
    useEffect(() => {
      if (!isAuth) {
        navigate("/login");
      }
    }, [navigate]);
    return <WrappedComponent {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
