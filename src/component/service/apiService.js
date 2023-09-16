import axios from "../../axios";

const postLogin = async (TenDangNhap, MatKhau) => {
  try {
    let user = await axios.post(`http://localhost:3030/api/login`, {
      TenDangNhap,
      MatKhau,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

const postRegister = async (TenDangNhap, MatKhau) => {
  try {
    let user = axios.post(`http://localhost:3030/api/create-new-user`, {
      TenDangNhap,
      MatKhau,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

const postCreatePatient = async (
  MaBN,
  HoBN,
  TenBN,
  SoDT,
  Email,
  NgaySinh,
  GioiTinh,
  DiaChi,
  GhiChu
) => {
  try {
    let data = await axios.post(`http://localhost:3030/api/create-patient`, {
      MaBN,
      HoBN,
      TenBN,
      SoDT,
      Email,
      NgaySinh,
      GioiTinh,
      DiaChi,
      GhiChu,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllPatient = (MaBN) => {
  return axios.get(`http://localhost:3030/api/get-all-patient?id=${MaBN}`);
};

const postEditPatient = async (data) => {
  try {
    let user = await axios.post(`http://localhost:3030/api/update-patient`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeletePatient = async (data) => {
  try {
    let user = await axios.post(`http://localhost:3030/api/delete-patient`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

export {
  postLogin,
  postRegister,
  postCreatePatient,
  getAllPatient,
  postEditPatient,
  postDeletePatient,
};
