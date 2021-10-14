import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const { isAuth } = useAuth();

  const scrollToBottom = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="brand-title">
            LocalDekho
          </a>
          <div
            className={
              !expanded ? "navbar-links menu-collapse" : "navbar-links"
            }
          >
            <ul className="links-list">
              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/"
                  onClick={scrollToTop}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/"
                  onClick={scrollToBottom}
                >
                  Explore Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="nav-link"
                  to="/"
                  onClick={scrollToBottom}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                {!isAuth && (
                  <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </NavLink>
                )}
                {isAuth && (
                  <NavLink
                    activeClassName="is-active"
                    exact={true}
                    className="nav-link"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="fab"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "X" : <i className="bx bx-menu-alt-right"></i>}
      </div>
    </>
  );
};

export default Navbar;
