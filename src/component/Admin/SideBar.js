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
import { FormattedMessage } from "react-intl";
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
              <span>
                <FormattedMessage id="system.home" />
              </span>
            </Link>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Quản lý">
              <MenuItem icon={<FaGem />}>
                <FormattedMessage id="system.user_manager" />

                <Link to="/admins/manage-user" />
              </MenuItem>
              <MenuItem icon={<MdDashboard />}>
                <FormattedMessage id="system.doctor_management" />
                <Link to="/admins/manage-doctor" />
              </MenuItem>
              <MenuItem icon={<FaGem />}>
                <FormattedMessage id="system.nurse_manager" />

                <Link to="/admins/manage-nurse" />
              </MenuItem>
              <MenuItem icon={<FaGem />}>
                <FormattedMessage id="system.medication_management" />

                <Link to="/admins/manage-medicine" />
              </MenuItem>
            </SubMenu>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Dịch vụ">
              <MenuItem>
                <FormattedMessage id="system.patient_management" />

                <Link to="/admins/manage-patient" />
              </MenuItem>
              <MenuItem>
                <FormattedMessage id="system.medical_service_management" />

                <Link to="/admins/manage-medical-service" />
              </MenuItem>
              <MenuItem>
                <FormattedMessage id="system.manage_doctor's_duty_schedule" />

                <Link to="/admins/manage-schedule" />
              </MenuItem>
              <MenuItem>
                <FormattedMessage id="system.manage_nurse's_duty_schedule" />

                <Link to="/admins/manage-schedule-nurse" />
              </MenuItem>
              <MenuItem>
                <FormattedMessage id="system.manage_patient_appointment_schedules" />

                <Link to="/admins/manage-appointment" />
              </MenuItem>
              <MenuItem>
                <FormattedMessage id="system.manage_medical_examination_cards" />

                <Link to="/admins/manage-examination" />
              </MenuItem>
              <MenuItem>
                <FormattedMessage id="system.patient_management_and_medical_services" />

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
                &#169; <FormattedMessage id="common.support" />:
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
