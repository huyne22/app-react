import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../service/apiService";
import { FormattedMessage } from "react-intl";

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
                      <FormattedMessage id="auth.create_account" />
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
                          <FormattedMessage id="auth.enter_email" />
                        </label>
                      </div>
                      {/* {!isValid && (
                        <p style={{ color: "red" }}>
                          <FormattedMessage id="auth.valid_email" />
                        </p>
                      )} */}

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
                          <FormattedMessage id="auth.password" />
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
                          <FormattedMessage id="auth.retype_password" />
                        </label>
                      </div>
                      <div className="col-12" style={{ color: "red" }}>
                        {errMessage && <p>{errMessage}</p>}
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={(e) => handleSubmit(e)}
                        >
                          <FormattedMessage id="auth.register" />
                        </button>
                      </div>

                      <div className="text-center text-muted mb-3">
                        <FormattedMessage id="auth.have_account" />

                        <a href="#" className="fw-bold text-body">
                          <Link to="/login">
                            <u>
                              {" "}
                              <FormattedMessage id="auth.signin_here" />
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
