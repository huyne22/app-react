import "./Header.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { doLogout } from "../../redux/action/userAction";
import { useDispatch } from "react-redux";
import logoImage from "../../assect/clinicHeader.jpg";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
const Header = () => {
  const dispath = useDispatch();

  const navigate = useNavigate();
  const account = useSelector((state) => state?.user?.account);
  const isAuth = useSelector((state) => state?.user?.isAuth);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogout = () => {
    // Xử lý đăng xuất ở đây, ví dụ: xóa token, cập nhật trạng thái đăng nhập, v.v.
    dispath(doLogout());
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container-top">
        <NavLink to="/" className="navbar-brand">
          <div className="logo-container">
            <img src={logoImage} alt="Logo" className="logo" />
          </div>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink to="/" className="text-logo nav-link"></NavLink>
            <div className="header-buttons">
              {isAuth === false ? (
                <>
                  <button
                    className="btn btn-login"
                    onClick={() => handleLogin()}
                  >
                    Log in
                  </button>
                  <button
                    className="btn btn-signup"
                    onClick={() => handleRegister()}
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  <div className="header-welcome">
                    <h6 className="text-welcome">
                      <FormattedMessage id="system.hello" />

                      {account && (
                        <div>
                          <span>UserName: {account.email}</span>
                          {account.role === "Doctor" && (
                            <span> {account.role}</span>
                          )}
                          {account.role === "Nurse" && (
                            <span> {account.role}</span>
                          )}
                        </div>
                      )}
                    </h6>
                  </div>
                  <NavDropdown title="Setting" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => handleLogout()}>
                      Log out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <>
    //   <div className="app">
    //     <div className="header">
    //       <div className="grid">
    //         <div className="header__navbar"></div>
    //         <div className="header__main">
    //           <div className="header__logo">
    //             <img src={logoImage} alt="logo" className="header__logo-link" />
    //           </div>
    //           <div className="header__content"></div>
    //           <div className="header__right">
    //             <button className="login">Login</button>
    //             <button className="register">Signup</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Header;
