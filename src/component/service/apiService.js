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

const postCreateMedicalService = async (
  MaDV,
  TenDV,
  MoTaDV,
  GiaTien,
  GhiChu
) => {
  try {
    let data = await axios.post(
      `http://localhost:3030/api/create-medical-service`,
      {
        MaDV,
        TenDV,
        MoTaDV,
        GiaTien,
        GhiChu,
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllMedicalService = (MaDV) => {
  return axios.get(
    `http://localhost:3030/api/get-all-medical-service?id=${MaDV}`
  );
};

const postEditMedicalService = async (data) => {
  try {
    let user = await axios.post(
      `http://localhost:3030/api/update-medical-service`,
      {
        data,
      }
    );
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteMedicalService = async (data) => {
  try {
    let user = await axios.post(
      `http://localhost:3030/api/delete-medical-service`,
      {
        data,
      }
    );
    return user;
  } catch (e) {
    console.log(e);
  }
};

//doctor
const postCreateDoctor = async (
  MaBS,
  HoBS,
  TenBS,
  SoDT,
  Email,
  BangCap,
  ChuyenMon,
  GioiTinh,
  MaNguoiDung,
  GhiChu
) => {
  try {
    let data = await axios.post(`http://localhost:3030/api/create-doctor`, {
      MaBS,
      HoBS,
      TenBS,
      SoDT,
      Email,
      BangCap,
      ChuyenMon,
      GioiTinh,
      MaNguoiDung,
      GhiChu,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllDoctor = (MaBS) => {
  return axios.get(`http://localhost:3030/api/get-all-doctor?id=${MaBS}`);
};

const postEditDoctor = async (data) => {
  try {
    let user = await axios.post(`http://localhost:3030/api/update-doctor`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteDoctor = async (data) => {
  try {
    let user = await axios.post(`http://localhost:3030/api/delete-doctor`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

//nurse
const postCreateNurse = async (
  MaYT,
  HoYT,
  TenYT,
  SoDT,
  Email,
  BangCap,
  ChuyenMon,
  GioiTinh,
  MaNguoiDung,
  GhiChu
) => {
  try {
    let data = await axios.post(`http://localhost:3030/api/create-nurse`, {
      MaYT,
      HoYT,
      TenYT,
      SoDT,
      Email,
      BangCap,
      ChuyenMon,
      GioiTinh,
      MaNguoiDung,
      GhiChu,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllNurse = (MaYT) => {
  return axios.get(`http://localhost:3030/api/get-all-nurse?id=${MaYT}`);
};

const postEditNurse = async (data) => {
  try {
    let user = await axios.post(`http://localhost:3030/api/update-nurse`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteNurse = async (data) => {
  try {
    let user = await axios.post(`http://localhost:3030/api/delete-nurse`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

//schedule
const postCreateSchedule = async (Ngay, Buoi, MaBS, SoLuongBNToiDa, GhiChu) => {
  try {
    let data = await axios.post(
      `http://localhost:3030/api/create-doctor-schedule`,
      {
        Ngay,
        Buoi,
        MaBS,
        SoLuongBNToiDa,
        GhiChu,
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllSchedule = (ALL) => {
  return axios.get(
    `http://localhost:3030/api/get-all-doctor-schedule?id=${ALL}`
  );
};

const postEditSchedule = async (data) => {
  try {
    let user = await axios.post(
      `http://localhost:3030/api/update-doctor-schedule`,
      {
        data,
      }
    );
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteSchedule = async (Ngay, Buoi, MaBS) => {
  try {
    let user = await axios.post(
      `http://localhost:3030/api/delete-doctor-schedule`,
      {
        Ngay,
        Buoi,
        MaBS,
      }
    );
    return user;
  } catch (e) {
    console.log(e);
  }
};

//appointment
const postCreateAppointment = async (Ngay, Buoi, MaBS, MaBN) => {
  try {
    let data = await axios.post(
      `http://localhost:3030/api/create-patient-appointment`,
      {
        Ngay,
        Buoi,
        MaBS,
        MaBN,
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllAppointment = (ALL) => {
  return axios.get(
    `http://localhost:3030/api/get-all-patient-appointment?id=${ALL}`
  );
};
const postDeleteAppointment = async (Ngay, Buoi, MaBS, MaBN) => {
  try {
    let user = await axios.post(
      `http://localhost:3030/api/delete-patient-appointment`,
      {
        Ngay,
        Buoi,
        MaBS,
        MaBN,
      }
    );
    return user;
  } catch (e) {
    console.log(e);
  }
};

//examination
const postCreateExamination = async (
  MaBS,
  MaBN,
  Ngay,
  Buoi,
  MaYTa,
  KetQuaChuanDoanBenh,
  GhiChu
) => {
  try {
    let data = await axios.post(
      `http://localhost:3030/api/create-medical-examination`,
      {
        MaBS,
        MaBN,
        Ngay,
        Buoi,
        MaYTa,
        KetQuaChuanDoanBenh,
        GhiChu,
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllExamination = (ALL) => {
  return axios.get(
    `http://localhost:3030/api/get-all-medical-examination?id=${ALL}`
  );
};

const postEditExamination = async (data) => {
  try {
    let user = await axios.post(
      `http://localhost:3030/api/update-medical-examination`,
      {
        data,
      }
    );
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteExamination = async (MaBS, MaBN, Ngay, Buoi) => {
  try {
    let user = await axios.post(
      `http://localhost:3030/api/delete-medical-examination`,
      {
        MaBS,
        MaBN,
        Ngay,
        Buoi,
      }
    );
    return user;
  } catch (e) {
    console.log(e);
  }
};

//examination
const postCreatePatientMedicalService = async (
  MaBN,
  MaDV,
  Ngay,
  Buoi,
  SoLuong,
  GhiChu
) => {
  try {
    let data = await axios.post(
      `http://localhost:3030/api/create-patient-medical-service`,
      {
        MaBN,
        MaDV,
        Ngay,
        Buoi,
        SoLuong,
        GhiChu,
      }
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllPatientMedicalService = (ALL) => {
  return axios.get(
    `http://localhost:3030/api/get-all-patient-medical-service?id=${ALL}`
  );
};

const postEditPatientMedicalService = async (data) => {
  try {
    let user = await axios.post(
      `http://localhost:3030/api/update-patient-medical-service`,
      {
        data,
      }
    );
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeletePatientMedicalService = async (MaBN, MaDV, Ngay, Buoi) => {
  try {
    let user = await axios.post(
      `http://localhost:3030/api/delete-patient-medical-service`,
      {
        MaBN,
        MaDV,
        Ngay,
        Buoi,
      }
    );
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
  postCreateMedicalService,
  postEditMedicalService,
  postDeleteMedicalService,
  getAllMedicalService,
  postCreateDoctor,
  getAllDoctor,
  postEditDoctor,
  postDeleteDoctor,
  postCreateNurse,
  getAllNurse,
  postEditNurse,
  postDeleteNurse,
  postCreateSchedule,
  getAllSchedule,
  postEditSchedule,
  postDeleteSchedule,
  postCreateAppointment,
  getAllAppointment,
  postDeleteAppointment,
  postCreateExamination,
  getAllExamination,
  postEditExamination,
  postDeleteExamination,
  postCreatePatientMedicalService,
  getAllPatientMedicalService,
  postEditPatientMedicalService,
  postDeletePatientMedicalService,
};
