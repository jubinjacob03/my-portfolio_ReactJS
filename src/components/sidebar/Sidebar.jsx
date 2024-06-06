import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  const CurrYear = new Date().getFullYear();
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav-logo">
          <img
            src={Logo}
            alt=""
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </a>
        <nav className="nav">
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav-item">
                <a href="#resume" className="nav-link">
                  <i className="icon-graduation"></i>
                </a>
              </li>

              <li className="nav-item">
                <a href="#work" className="nav-link">
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <i className="icon-note"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav-footer">
          <span className="copyright">&copy; 2023 - {CurrYear}.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav-toggle nav-toggle-open" : "nav-toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
