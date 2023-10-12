import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";
import { postLogin } from "../service/apiService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner3 } from "react-icons/im";
import { FormattedMessage } from "react-intl";
const Login = (props) => {
  const [TenDangNhap, setTenDangNhap] = useState("");
  const [MatKhau, setMatKhau] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const dispath = useDispatch();

  const handleLogin = async (e) => {
    if (TenDangNhap.trim() === "" || MatKhau.trim() === "") {
      alert("Vui lòng nhập thông tin.");
      return;
    } else {
      e.preventDefault();
      setIsLoading(true);
      setTimeout(async () => {
        let res = await postLogin(TenDangNhap, MatKhau);
        console.log("red", res);
        if (res?.errCode === 0) {
          dispath(doLogin(res));
          navigate("/admins");
        } else {
          await setErrMessage(res?.errMessage);
        }

        setIsLoading(false);
      }, 1000);
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
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13">
                    <FormattedMessage id="auth.username" />
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
                    <FormattedMessage id="auth.password" />
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

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={(e) => handleLogin(e)}
                  disabled={isLoading}
                >
                  {isLoading === true && (
                    <ImSpinner3 className="icon-loading" />
                  )}
                  <FormattedMessage id="auth.login" />
                </button>

                <div className="text-center text-muted mt-3 mb-3">
                  <FormattedMessage id="auth.no_account" />
                  <a href="#" className="fw-bold text-body">
                    <Link to="/register">
                      <u>
                        {" "}
                        <FormattedMessage id="auth.register_here" />
                      </u>
                    </Link>
                  </a>
                </div>
                <div className="text-center text-muted ms-2">
                  <FormattedMessage id="auth.back_home" />
                  <a href="#" className="fw-bold text-body">
                    <Link to="/">
                      {" "}
                      <FormattedMessage id="auth.back" />
                    </Link>
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
