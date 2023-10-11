import React from "react";
// import Header from "./Layout/Header/Header";
import { Link, Outlet } from "react-router-dom";
import _ from "lodash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import withAuth from "./component/Admin/withAuth";
import Admin from "./component/Admin/Admin";
import User from "./component/User/User";
import HomePage from "./component/Home/HomePage/HomePage";
import ManagePatient from "./component/Patient/ManagePatient";
import DashBoard from "./component/Admin/DashBoard";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import ManageMedicalService from "./component/MedicalService/ManageMedicalService";
import ManageDoctor from "./component/Doctor/ManageDoctor";
import ManageNurse from "./component/Nurse/ManageNurse";
import ManageSchedule from "./component/Schedule/ManageSchedule";
import ManageAppointment from "./component/Appointment/ManageAppointment";
import ManageExamination from "./component/Examination/ManageExamination";
import ManagePatientMedicalService from "./component/Patient_MedicalService/ManagePatientMedicalService";
import ManageMedicine from "./component/Medicine/ManageMedicine";
import Layout from "./Layout";
const App = () => {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
        <Route path="users" element={<User />}></Route>
        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route index path="manage-doctor" element={<ManageDoctor />} />
          <Route path="manage-nurse" element={<ManageNurse />} />
          <Route path="manage-medicine" element={<ManageMedicine />} />

          <Route path="manage-patient" element={<ManagePatient />} />
          <Route path="manage-patient" element={<ManagePatient />}></Route>
          <Route
            path="manage-medical-service"
            element={<ManageMedicalService />}
          />
          <Route path="manage-schedule" element={<ManageSchedule />} />
          <Route path="manage-appointment" element={<ManageAppointment />} />
          <Route path="manage-examination" element={<ManageExamination />} />
          <Route
            path="manage-patient-medical-service"
            element={<ManagePatientMedicalService />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
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

export default App;
