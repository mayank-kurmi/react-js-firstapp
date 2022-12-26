import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

import SideBar from "./components/SideBar";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

import EventHandlers from "./pages/EventHandlers";
import UserSignUpForm from "./pages/FormValidations/UserSignUpForm";
import ProductsApi from "./pages/ProductsApi";

const configRouting = (
  <Router>
    <div>
      <Navigation />
      <div className="container-fluid vh-100">
        <div className="row vh-100">
          {/* <div className="col-1 vh-100">
            <SideBar />
          </div> */}
          <div className="col-12 vh-100">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/products" element={<EventHandlers />} />
              <Route path="/sign-up" element={<UserSignUpForm />} />
              <Route path="/products-api" element={<ProductsApi />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(configRouting);
