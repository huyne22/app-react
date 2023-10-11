import React from "react";
import "./Layout.scss";
// import Header from "./Layout/Header/Header";
import { Link, Outlet } from "react-router-dom";
import _ from "lodash";

const Layout = () => {
  return (
    <div className="app-container">
      <div className="header-container">{/* <Header /> */}</div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
