import axios from "../../axios";
import config from "../../config";
const apiBaseUrl = config.api.API_BASE_URL;

const postLogin = async (TenDangNhap, MatKhau) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/login`, {
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
    let user = axios.post(`${apiBaseUrl}api/create-new-user`, {
      TenDangNhap,
      MatKhau,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

//doctor
const postCreateUser = async (MaNguoiDung, TenDangNhap, MatKhau, GhiChu) => {
  try {
    let data = await axios.post(`${apiBaseUrl}api/create-new-user`, {
      MaNguoiDung,
      TenDangNhap,
      MatKhau,
      GhiChu,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllUser = (MaNguoiDung, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-user`, {
    params: {
      id: MaNguoiDung,
      page: page,
    },
  });
};

const postEditUser = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/update-user`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteUser = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-user`, {
      data,
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
    let data = await axios.post(`${apiBaseUrl}api/create-patient`, {
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

const getAllPatient = (MaBN, page) => {
  try {
    return axios.get(`${apiBaseUrl}api/get-all-patient`, {
      params: {
        id: MaBN,
        page: page,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

const postEditPatient = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/update-patient`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeletePatient = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-patient`, {
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
    let data = await axios.post(`${apiBaseUrl}api/create-medical-service`, {
      MaDV,
      TenDV,
      MoTaDV,
      GiaTien,
      GhiChu,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllMedicalService = (MaDV, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-medical-service`, {
    params: {
      id: MaDV,
      page: page,
    },
  });
};

const postEditMedicalService = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/update-medical-service`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteMedicalService = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-medical-service`, {
      data,
    });
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
    let data = await axios.post(`${apiBaseUrl}api/create-doctor`, {
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

const getAllDoctor = (MaBS, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-doctor`, {
    params: {
      id: MaBS,
      page: page,
    },
  });
};

const postEditDoctor = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/update-doctor`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteDoctor = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-doctor`, {
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
    let data = await axios.post(`${apiBaseUrl}api/create-nurse`, {
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

const getAllNurse = (MaYT, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-nurse`, {
    params: {
      id: MaYT,
      page: page,
    },
  });
};

const postEditNurse = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/update-nurse`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteNurse = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-nurse`, {
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
    let data = await axios.post(`${apiBaseUrl}api/create-doctor-schedule`, {
      Ngay,
      Buoi,
      MaBS,
      SoLuongBNToiDa,
      GhiChu,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllSchedule = (All, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-doctor-schedule`, {
    params: {
      id: All,
      page: page,
    },
  });
};
const postEditSchedule = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/update-doctor-schedule`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteSchedule = async (Ngay, Buoi, MaBS) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-doctor-schedule`, {
      Ngay,
      Buoi,
      MaBS,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

//schedule nurse
const postCreateScheduleNurse = async (
  Ngay,
  Buoi,
  MaYTa,
  SoLuongBNToiDa,
  GhiChu
) => {
  try {
    let data = await axios.post(`${apiBaseUrl}api/create-nurse-schedule`, {
      Ngay,
      Buoi,
      MaYTa,
      SoLuongBNToiDa,
      GhiChu,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllScheduleNurse = (All, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-nurse-schedule`, {
    params: {
      id: All,
      page: page,
    },
  });
};
const postEditScheduleNurse = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/update-nurse-schedule`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteScheduleNurse = async (Ngay, Buoi, MaYTa) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-nurse-schedule`, {
      Ngay,
      Buoi,
      MaYTa,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};

//appointment
const postCreateAppointment = async (Ngay, Buoi, MaBS, MaBN) => {
  try {
    let data = await axios.post(`${apiBaseUrl}api/create-patient-appointment`, {
      Ngay,
      Buoi,
      MaBS,
      MaBN,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllAppointment = (ALL, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-patient-appointment`, {
    params: {
      id: ALL,
      page: page,
    },
  });
};
const postDeleteAppointment = async (Ngay, Buoi, MaBS, MaBN) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-patient-appointment`, {
      Ngay,
      Buoi,
      MaBS,
      MaBN,
    });
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
  GhiChu,
  MaThuoc,
  ThanhToan
) => {
  try {
    let data = await axios.post(`${apiBaseUrl}api/create-medical-examination`, {
      MaBS,
      MaBN,
      Ngay,
      Buoi,
      MaYTa,
      KetQuaChuanDoanBenh,
      GhiChu,
      MaThuoc,
      ThanhToan,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllExamination = (ALL, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-medical-examination`, {
    params: {
      id: ALL,
      page: page,
    },
  });
};

const postEditExamination = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/update-medical-examination`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteExamination = async (MaBS, MaBN, Ngay, Buoi) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-medical-examination`, {
      MaBS,
      MaBN,
      Ngay,
      Buoi,
    });
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
      `${apiBaseUrl}api/create-patient-medical-service`,
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

const getAllPatientMedicalService = (ALL, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-patient-medical-service`, {
    params: {
      id: ALL,
      page: page,
    },
  });
};

const postEditPatientMedicalService = async (data) => {
  try {
    let user = await axios.post(
      `${apiBaseUrl}api/update-patient-medical-service`,
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
      `${apiBaseUrl}api/delete-patient-medical-service`,
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

const getPatientSearch = async (sdt) => {
  try {
    console.log("sdt", sdt);
    const response = await axios.post(`${apiBaseUrl}api/get-patient-search`, {
      sdt,
    });
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Re-throw lỗi để xử lý ở phần gọi hàm getPatientSearch
  }
};

const getAppointmentSearch = async (ngay) => {
  try {
    console.log("ngay", ngay);
    const response = await axios.post(
      `${apiBaseUrl}api/get-patient-apointment-search`,
      {
        ngay,
      }
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Re-throw lỗi để xử lý ở phần gọi hàm getPatientSearch
  }
};

const getScheduleSearch = async (ngay) => {
  try {
    console.log("ngay", ngay);
    const response = await axios.post(
      `${apiBaseUrl}api/get-doctor-schedule-search`,
      {
        ngay,
      }
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Re-throw lỗi để xử lý ở phần gọi hàm getPatientSearch
  }
};

const getScheduleNurseSearch = async (ngay) => {
  try {
    console.log("ngay", ngay);
    const response = await axios.post(
      `${apiBaseUrl}api/get-nurse-schedule-search`,
      {
        ngay,
      }
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Re-throw lỗi để xử lý ở phần gọi hàm getPatientSearch
  }
};

const getMedicalExaminationSearch = async (ngay) => {
  try {
    console.log("ngay", ngay);
    const response = await axios.post(
      `${apiBaseUrl}api/get-medical-examination-search`,
      {
        ngay,
      }
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Re-throw lỗi để xử lý ở phần gọi hàm getPatientSearch
  }
};

const getPatientMedicalServiceSearch = async (ngay) => {
  try {
    console.log("ngay", ngay);
    const response = await axios.post(
      `${apiBaseUrl}api/get-patient-medical-service-search`,
      {
        ngay,
      }
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Re-throw lỗi để xử lý ở phần gọi hàm getPatientSearch
  }
};

const getMedicalServiceSearch = async (tenDV) => {
  try {
    console.log("tenDV", tenDV);
    const response = await axios.post(
      `${apiBaseUrl}api/get-medical-service-search`,
      {
        tenDV,
      }
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Re-throw lỗi để xử lý ở phần gọi hàm getPatientSearch
  }
};

const getDoctorSearch = async (tenBS) => {
  try {
    console.log("tenBS", tenBS);
    const response = await axios.post(`${apiBaseUrl}api/get-doctor-search`, {
      tenBS,
    });
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Re-throw lỗi để xử lý ở phần gọi hàm getPatientSearch
  }
};

const getUserSearch = async (tenDangNhap) => {
  try {
    console.log("tenDangNhap", tenDangNhap);
    const response = await axios.post(`${apiBaseUrl}api/get-user-search`, {
      tenDangNhap,
    });
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
};

const getNurseSearch = async (tenYT) => {
  try {
    console.log("tenYT", tenYT);
    const response = await axios.post(`${apiBaseUrl}api/get-nurse-search`, {
      tenYT,
    });
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
};

const getMedicineSearch = async (TenThuoc) => {
  try {
    console.log("TenThuoc", TenThuoc);
    const response = await axios.post(`${apiBaseUrl}api/get-medicine-search`, {
      TenThuoc,
    });
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
};
const postCreateMedicine = async (
  MaThuoc,
  TenThuoc,
  CongDung,
  DonVi,
  SoLuong,
  GhiChu
) => {
  try {
    let data = await axios.post(`${apiBaseUrl}api/create-medicine`, {
      MaThuoc,
      TenThuoc,
      CongDung,
      DonVi,
      SoLuong,
      GhiChu,
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getAllMedicine = (MaThuoc, page) => {
  return axios.get(`${apiBaseUrl}api/get-all-medicine`, {
    params: {
      id: MaThuoc,
      page: page,
    },
  });
};

const postEditMedicine = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/update-medicine`, {
      data,
    });
    return user;
  } catch (e) {
    console.log(e);
  }
};
const postDeleteMedicine = async (data) => {
  try {
    let user = await axios.post(`${apiBaseUrl}api/delete-medicine`, {
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
  postCreateUser,
  getAllUser,
  postEditUser,
  postDeleteUser,
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
  postCreateScheduleNurse,
  getAllScheduleNurse,
  postEditScheduleNurse,
  postDeleteScheduleNurse,
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
  getPatientSearch,
  getAppointmentSearch,
  getScheduleSearch,
  getScheduleNurseSearch,
  getMedicalExaminationSearch,
  getPatientMedicalServiceSearch,
  getMedicalServiceSearch,
  getDoctorSearch,
  getUserSearch,
  getNurseSearch,
  getMedicineSearch,
  postCreateMedicine,
  getAllMedicine,
  postEditMedicine,
  postDeleteMedicine,
};
