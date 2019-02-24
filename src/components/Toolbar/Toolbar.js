import React from "react";
import "./Toolbar.css";
import logo from "../../resources/images/logo.png";
const Toolbar = props => {
  return (
    <nav class="navbar navbar-expand-sm">
      <div>
        <a class="navbar-brand" href="#">
          <img src={logo} alt="logo" style={{ width: "70px" }} />
        </a>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <a class="navbar-brand" href="#" style={{ color: "black" }}>
          <strong>Codeathlon - Distributed Systems Course</strong>
        </a>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Toolbar;
