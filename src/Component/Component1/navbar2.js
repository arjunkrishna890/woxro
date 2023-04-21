import React from "react";
import './navbar2.css';

function Navbar2(){
    return(
        <div className="navbar2">
        <nav className="navbar navbar-dark navbar-expand-sm" style={{ backgroundColor: "#03001c" }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-around">
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "white", fontWeight: "400" }}>Home</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "white", fontWeight: "420" }}>About us</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "white", fontWeight: "400" }}>Services</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "white", fontWeight: "400" }}>Technology</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "white", fontWeight: "400" }}>Career</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "white", fontWeight: "400" }}>Blogs</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "white", fontWeight: "400" }}>Our works</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span style={{ color: "white", fontWeight: "400" }}>Contact us</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
      
      

    )
}
export default Navbar2