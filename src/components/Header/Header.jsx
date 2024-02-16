import React, { useRef } from "react";
import { RiLoginCircleLine, RiUserLine } from "react-icons/ri";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

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

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
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
                <div className="search__box" >
                  <input type="text" placeholder="Search" />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
                <div className="header__top">
                  <Container>
                    <Row>
                      <Col lg="12" md="12" sm="6">
                        <div className="header__top__right d-flex align-items-center justify-content-end gap-3">

                          <Link to="/login" className=" d-flex align-items-center gap-1">
                            <i className="ri-login-circle-line"></i> <RiLoginCircleLine /> Login
                          </Link>

                          <Link to="/Signup" className=" d-flex align-items-center gap-1">
                            <i className="ri-user-line"></i> <RiUserLine /> Register
                          </Link>

                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>

            <div className="nav__right">

            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;