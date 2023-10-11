import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../assect/sidebarBg.jpg";
import "./SideBar.scss";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <DiReact size={"3em"} color={"00bfff"} />
            <Link to="/">
              <span>Trang chủ</span>
            </Link>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Quản lý">
              <MenuItem icon={<MdDashboard />}>
                Quản lý bác sĩ
                <Link to="/admins/manage-doctor" />
              </MenuItem>
              <MenuItem icon={<FaGem />}>
                Quản lý y tá
                <Link to="/admins/manage-nurse" />
              </MenuItem>
              <MenuItem icon={<FaGem />}>
                Quản lý thuốc
                <Link to="/admins/manage-medicine" />
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Dịch vụ">
              <MenuItem>
                Quản lý bệnh nhân
                <Link to="/admins/manage-patient" />
              </MenuItem>
              <MenuItem>
                Quản lý dịch vụ y tế
                <Link to="/admins/manage-medical-service" />
              </MenuItem>
              <MenuItem>
                Quản lý lịch trực bác sĩ
                <Link to="/admins/manage-schedule" />
              </MenuItem>
              <MenuItem>
                Quản lý lịch hẹn bệnh nhân
                <Link to="/admins/manage-appointment" />
              </MenuItem>
              <MenuItem>
                Quản lý phiếu khám bệnh
                <Link to="/admins/manage-examination" />
              </MenuItem>
              <MenuItem>
                Quản lý bệnh nhân - dịch vụ
                <Link to="/admins/manage-patient-medical-service" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="/"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                &#169; Hỗ trợ:
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
