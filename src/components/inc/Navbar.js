import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  fixed-top"  style={{ backgroundColor: "#156570" }} >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" style={{ color: "white"}}>
          NGO
        </Link>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link active">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link active">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/volunteer" className="nav-link active">
                Volunteer
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/faq" className="nav-link active">
                FAQ
              </Link>
            </li>
          </ul>
          <Link to="/donations" className="btn" style={{ backgroundColor: "#aad8cd", color:"aad8cd" ,height: "30px",
    lineHeight: "20px",
    width: "70px",
    fontSize: "14px"}}>Donate</Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
