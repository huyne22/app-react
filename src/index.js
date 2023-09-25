import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "bootstrap/dist/css/bootstrap.min.css";
import { store, persistor } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Admin from "./component/Admin/Admin";
import User from "./component/User/User";
import HomePage from "./component/Home/HomePage";
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
const root = ReactDOM.createRoot(document.getElementById("root"));
// Hàm để lấy token từ localStorage
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />}></Route>
            <Route path="users" element={<User />}></Route>
          </Route>

          <Route path="/admins" element={<Admin />}>
            <Route index element={<DashBoard />} />
            <Route path="manage-doctor" element={<ManageDoctor />} />
            <Route path="manage-nurse" element={<ManageNurse />} />

            <Route path="manage-patient" element={<ManagePatient />} />
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
      </BrowserRouter>
    </PersistGate>
    {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
