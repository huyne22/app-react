import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const HomePage = (props) => {
  const isAuth = useSelector((state) => state?.user?.isAuth);
  const account = useSelector((state) => state?.user?.account);
  const navigate = useNavigate();
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-content">
          <div className="title-3">
            {isAuth === false ? (
              <button onClick={() => navigate("/login")}>
                <FormattedMessage id="auth.management_page" />
              </button>
            ) : (
              <button onClick={() => navigate("/admins")}>
                <FormattedMessage id="auth.management_page" />
              </button>
            )}
          </div>
        </div>
        <div class="intro-box">
          <h1>Phòng Khám Bệnh ABC</h1>
          <p>
            Chào mừng bạn đến với phòng khám của chúng tôi. Chúng tôi cam kết
            cung cấp dịch vụ y tế chất lượng và chăm sóc sức khỏe tốt nhất cho
            bạn.
          </p>
          <p>Địa chỉ: 123 Đường Nguyễn Du, Quận 1, TP.HCM</p>
          <p>Điện thoại: (012) 345-6789</p>
        </div>
      </div>
    </>
  );
};
export default HomePage;
