import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  const navBarStyle = {
    backgroundColor: "#e3f2fd",
  };

  //const updateuseState('')

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navBarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            React Js
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" exact="true" to="/">
                  {" "}
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about-us">
                  {" "}
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/contact-us">
                  {" "}
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/products">
                  {" "}
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/sign-up">
                  {" "}
                  Sign-Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/products-api">
                  {" "}
                  Products-Api
                </NavLink>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
          <div className="d-flex align-items-center">
            {/* <!-- Icon --> */}
            <a className="text-reset " href="#">
              <i className="bi bi-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1
                {/* 122 */}
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
