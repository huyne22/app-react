import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppRouter = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="app-container">
        <div className="app-sidebar">
          <SideBar collapsed={collapsed} />
        </div>
        <div className="app-content ms-2">
          <div className="app-header">
            <FaBars cursor="pointer" onClick={() => setCollapsed(!collapsed)} />
          </div>
          <div className="app-main">
            <Outlet />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
export default AppRouter;
