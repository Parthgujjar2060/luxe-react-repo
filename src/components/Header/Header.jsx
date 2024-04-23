import React, { useRef, useState, useEffect } from "react";
import { RiMenuLine, RiLoginCircleLine, RiUserLine } from "react-icons/ri";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import { getuserData } from "../../services/authenticate";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = ({ loginResponse }) => {
  const menuRef = useRef(null);
  const [userId, setUserID] = useState("");
  const [sessionToken, setSessionToken] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchUserData = async () => {
    try {
      const userData = await getuserData(sessionToken);
      setUserID(`${userData.user.fname} ${userData.user.lname}`);
      console.log("User Data:", userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    // get the token from local storage
    const token = localStorage.getItem("token");
    if (token) {
      try {
        fetchUserData();
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      setSessionToken(token);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/home";
  };

  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            {isMobile && (
              <span className="mobile__menu" onClick={() => setShowMenu(!showMenu)}>
                <RiMenuLine />
              </span>
            )}
            <div className={`menu ${isMobile && (showMenu ? 'show' : 'hide')}`}>
              {navLinks.map((item, index) => (
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__item" : "nav__item"
                  }
                  key={index}
                >
                  {item.display}
                </NavLink>
              ))}

              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>

              <div className="header__top">
                <Container>
                  <Row>
                    <Col lg="12" md="12" sm="6">
                      <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                        {sessionToken ? (
                          <div className="responseLogin">
                            <p>Hello, {userId}</p>
                            <Link className="login_left d-flex align-items-center gap-1" onClick={logOut}>
                              <i className="ri-user-line"></i> <RiUserLine /> Logout
                            </Link>
                          </div>
                        ) : (
                          <div style={{ display: "flex", gap: "1rem" }}>
                            <Link to="/login" className="login_left d-flex align-items-center gap-1">
                              <i className="ri-login-circle-line"></i> <RiLoginCircleLine /> Login
                            </Link>
                            <Link to="/Signup" className="signup_left d-flex align-items-center gap-1">
                              <i className="ri-user-line"></i> <RiUserLine /> Register
                            </Link>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>

            <div className="nav__right"></div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
