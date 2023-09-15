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
    e.preventDefault();
    //validate
    //submit apis
    let res = await postLogin(TenDangNhap, MatKhau);
    console.log("check Dang Nhap", res);
    await setErrMessage(res.errMessage);
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

                <p className="text-center text-muted mt-5 mb-0">
                  Bạn chưa có tài khoản?{" "}
                  <a href="/register" className="fw-bold text-body">
                    <u>Đăng ký tại đây</u>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
