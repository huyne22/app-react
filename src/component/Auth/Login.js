import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";
import { postLogin } from "../service/apiService";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [TenDangNhap, setTenDangNhap] = useState("");
  const [MatKhau, setMatKhau] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (TenDangNhap.trim() === "" || MatKhau.trim() === "") {
      alert("Vui lòng nhập thông tin.");
      return;
    } else {
      e.preventDefault();
      //validate
      //submit apis
      let res = await postLogin(TenDangNhap, MatKhau);
      console.log(res);
      let token = res?.access_token;
      if (res?.errCode == 0) {
        alert("Chào mừng admin");
        localStorage.setItem("accessToken", token);
        console.log("Login successful! Token:", token);
        let token1 = localStorage.getItem("accessToken");
        if (token1.length > 0) {
          // Nếu không có token, chuyển hướng đến trang đăng nhập
          navigate("/admins");
        } else {
          navigate("/login");
          return null;
        }
      } else {
        console.log("check Dang Nhap", res);
        await setErrMessage(res?.errMessage);
      }
    }
  };
  const handleOnChange = (e) => {
    setTenDangNhap(e.target.value);
  };

  const handleDisplayPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13">
                    Tên Đăng Nhập
                  </label>
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    name="TenDangNhap"
                    value={TenDangNhap}
                    onChange={(event) => handleOnChange(event)}
                    placeholder="Nhập thông tin"
                    required
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example23">
                    Mật khẩu
                  </label>
                  <div className="input-password">
                    <input
                      type={isShowPassword ? "text" : "password"}
                      id="form1Example23"
                      className="form-control form-control-lg"
                      value={MatKhau}
                      name="MatKhau"
                      onChange={(event) => setMatKhau(event.target.value)}
                      placeholder="Nhập mật khẩu"
                      required
                    />

                    <i
                      className={`fa ${
                        isShowPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                      onClick={handleDisplayPassword}
                      style={{ cursor: "pointer" }}
                    >
                      {isShowPassword ? "👁️" : "👁️‍🗨️"}
                    </i>
                  </div>
                </div>

                <div className="col-12" style={{ color: "red" }}>
                  {errMessage && <p>{errMessage}</p>}
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={(e) => handleLogin(e)}
                >
                  Sign in
                </button>

                <div className="text-center text-muted mt-3 mb-3">
                  Bạn chưa có tài khoản?{" "}
                  <a href="#" className="fw-bold text-body">
                    <Link to="/register">
                      <u>Đăng ký tại đây</u>
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
      </section>
    </>
  );
};
export default Login;
