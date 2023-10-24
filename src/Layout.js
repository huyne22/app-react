import React from "react";
import "./Layout.scss";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { Link, Outlet } from "react-router-dom";
import _ from "lodash";

const Layout = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="app-content">
          <Outlet />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
