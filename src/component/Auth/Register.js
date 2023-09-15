import "./Register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../service/apiService";

const Register = (props) => {
  const navigate = useNavigate();

  const [TenDangNhap, setTenDangNhap] = useState("");
  const [MatKhau, setMatKhau] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (MatKhau === confirmPassword) {
      // Thực hiện xử lý đổi mật khẩu ở đây
      let user = await postRegister(TenDangNhap, MatKhau);
      console.log(user);
    } else {
      alert("Mật khẩu và mật khẩu xác nhận không khớp.");
    }
  };
  const handlePasswordChange = (e) => {
    setMatKhau(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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
                          onChange={(e) => setTenDangNhap(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Email của bạn
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          value={MatKhau}
                          onChange={(e) => handlePasswordChange(e)}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Mật khẩu
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          value={confirmPassword}
                          onChange={(e) => handleConfirmPasswordChange(e)}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Nhập lại mật khẩu
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          Tôi đồng ý tất cả các tuyên bố trong{" "}
                          <a href="#!" className="text-body">
                            <u>Điều khoản dịch vụ</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={(e) => handleSubmit(e)}
                        >
                          Đăng ký
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Bạn đã có tài khoản?{" "}
                        <a href="/login" className="fw-bold text-body">
                          <u>Đăng nhập tại đây</u>
                        </a>
                      </p>
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
