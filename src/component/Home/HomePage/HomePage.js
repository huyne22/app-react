import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const isAuth = useSelector((state) => state?.user?.isAuth);
  const account = useSelector((state) => state?.user?.account);
  localStorage.setItem("token", account?.access_token);

  const navigate = useNavigate();
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-content">
          <div className="title-3">
            {isAuth === false ? (
              <button onClick={() => navigate("/login")}>
                Quản lý phòng khám LVH.
              </button>
            ) : (
              <button onClick={() => navigate("/admins")}>
                Quản lý phòng khám LVH.
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
