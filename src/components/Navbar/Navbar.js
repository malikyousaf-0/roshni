import React from "react";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-none">
        <div className="container">
          <a className="navbar-brand text-light" href="#">
            Roshni Welfare
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
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#vision">
                  Vision
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#involve">
                  Involve
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
