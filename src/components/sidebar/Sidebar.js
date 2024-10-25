import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const CurrYear = new Date().getFullYear();
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <div />
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
                <a href="#experience" className="nav-link">
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
          <span className="copyright">&copy; 2022 - {CurrYear}.</span>
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
