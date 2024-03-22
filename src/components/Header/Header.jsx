import React, { useRef, useState, useEffect } from "react";
import { RiLoginCircleLine, RiUserLine } from "react-icons/ri";
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
  const [sessionToken, setSessionToken] = useState();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getuserData(sessionToken);
        setUserID(`${userData.firstName} ${userData.lastName}`);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (sessionToken) {
      fetchUserData();
    }
  }, [sessionToken]);

  return (
    <header className="header">
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu" onClick={() => setShowMenu(!showMenu)}>
              <i className="ri-menu-line"></i>
            </span>

            <div className={`menu ${showMenu ? 'show' : 'hide'}`}>
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
                        
                          <Link to="/login" className="login_left d-flex align-items-center gap-1">
                            <i className="ri-login-circle-line"></i> <RiLoginCircleLine /> Login
                          </Link>
                        
                        <Link to="/Signup" className="signup_left d-flex align-items-center gap-1">
                          <i className="ri-user-line"></i> <RiUserLine /> Register
                        </Link>
                        <div className="responseLogin">
                          <p>Login Response:- {loginResponse}</p>
                        </div>
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
