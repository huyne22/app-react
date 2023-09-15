import axios from "../../axios";

const postLogin = (TenDangNhap, MatKhau) => {
  return axios.post(`http://localhost:3030/api/login`, {
    TenDangNhap,
    MatKhau,
  });
};

const postRegister = (TenDangNhap, MatKhau) => {
  return axios.post(`http://localhost:3030/api/create-new-user`, {
    TenDangNhap,
    MatKhau,
  });
};

const postCreatePatient = (
  MaBN,
  HoBN,
  TenBN,
  SoDT,
  Email,
  NgaySinh,
  GioiTinh,
  DiaChi
) => {
  return axios.post(`http://localhost:3030/api/create-patient`, {
    MaBN,
    HoBN,
    TenBN,
    SoDT,
    Email,
    NgaySinh,
    GioiTinh,
    DiaChi,
  });
};

const getAllPatient = (MaBN) => {
  return axios.get(`http://localhost:3030/api/get-all-patient?id=${MaBN}`);
};

const postEditPatient = (data) => {
  return axios.post(`http://localhost:3030/api/update-patient`, { data });
};

export {
  postLogin,
  postRegister,
  postCreatePatient,
  getAllPatient,
  postEditPatient,
};
