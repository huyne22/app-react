import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../service/apiService";

const Register = (props) => {
  const navigate = useNavigate();

  const [TenDangNhap, setTenDangNhap] = useState("");
  const [MatKhau, setMatKhau] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = async (e) => {
    if (
      TenDangNhap.trim() === "" ||
      MatKhau.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      alert("Vui lòng nhập thông tin.");
      return;
    } else {
      e.preventDefault();
      if (MatKhau === confirmPassword) {
        let res = await postRegister(TenDangNhap, MatKhau);
        if (res?.errCode == 0) {
          alert("Đăng kí thành công");
          navigate("/login");
        } else {
          await setErrMessage(res?.errMessage);
        }
      } else {
        alert("Mật khẩu và mật khẩu xác nhận không khớp.");
      }
    }
  };
  const handlePasswordChange = (e) => {
    setMatKhau(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    setTenDangNhap(e.target.value);

    // Biểu thức chính quy để kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(e.target.value));
    // console.log("check valid", isValid);
  };
  return (
    <>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')`,
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      TẠO MỘT TÀI KHOẢN
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          value={TenDangNhap}
                          onChange={(e) => handleOnChangeEmail(e)}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Nhập email
                        </label>
                      </div>
                      {!isValid && (
                        <p style={{ color: "red" }}>
                          Vui lòng nhập một địa chỉ email hợp lệ
                        </p>
                      )}

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          value={MatKhau}
                          onChange={(e) => handlePasswordChange(e)}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Mật khẩu
                        </label>
                      </div>

                      <div className="form-outline">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          value={confirmPassword}
                          onChange={(e) => handleConfirmPasswordChange(e)}
                          required
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Nhập lại mật khẩu
                        </label>
                      </div>
                      <div className="col-12" style={{ color: "red" }}>
                        {errMessage && <p>{errMessage}</p>}
                      </div>

                      {/* <div className="form-check d-flex justify-content-center mb-5"> */}
                      {/* <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        /> */}
                      {/* <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          Tôi đồng ý tất cả các tuyên bố trong{" "}
                          <a href="#" className="text-body">
                            <u>Điều khoản dịch vụ</u>
                          </a>
                        </label> */}
                      {/* </div> */}

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={(e) => handleSubmit(e)}
                        >
                          Đăng ký
                        </button>
                      </div>

                      <div className="text-center text-muted mb-3">
                        Bạn đã có tài khoản?{" "}
                        <a href="#" className="fw-bold text-body">
                          <Link to="/login">
                            <u>Đăng nhập tại đây</u>
                          </Link>
                        </a>
                      </div>
                      <div className="text-center text-muted ms-2">
                        Quay về trang chủ?{" "}
                        <a href="#" className="fw-bold text-body">
                          <Link to="/">Quay về</Link>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
