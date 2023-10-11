import SideBarUser from "./SideBarUser";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const User = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  // console.log("in ra ", props.data);
  return (
    <>
      <div className="admin-container">
        <div className="admin-sidebar">
          <SideBarUser collapsed={collapsed} />
        </div>
        <div className="admin-content ms-2">
          <div className="admin-header">
            <FaBars cursor="pointer" onClick={() => setCollapsed(!collapsed)} />
          </div>
          <div className="admin-main">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
