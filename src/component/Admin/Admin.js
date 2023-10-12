import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import withAuth from "./withAuth";
import { changeLanguage } from "../../redux/action/userAction";

const Admin = (props) => {
  const dispath = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const changeLanguages = (ev) => {
    dispath(changeLanguage(ev));
  };
  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <SideBar collapsed={collapsed} />
        </div>
        <div className="admin-content ms-2">
          <div className="admin-header">
            <FaBars cursor="pointer" onClick={() => setCollapsed(!collapsed)} />
            <div className="language">
              <div className="language-vi">
                <span onClick={() => changeLanguages("vi")}>VI</span>
              </div>
              <div className="language-en">
                <span onClick={() => changeLanguages("en")}>EN</span>
              </div>
            </div>
          </div>
          <div className="admin-main">
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
export default withAuth(Admin);
