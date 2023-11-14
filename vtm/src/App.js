import React,{ useState,useEffect } from "react";
import logo from "./Images/Logo1.png";
import "./Navbar.css";
import { Link } from 'react-router-dom'


export default function Navbar() {
  const closeMobileMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
      // console.log("aniket");
      navbarToggler.click(); // Simulate a click on the mobile menu toggle button
    }
  };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mx-4">
            <Link to="/">
            <img src={logo} id="logo" />
            </Link>
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
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 mx-4"
              id="ulContainer"
            >
                <li className="nav-item navbarlink">
                <a
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                  href="#"
                >
                  Home<i className='bx bx-caret-down'></i>
                </a>
                {/* <ul className="dropdown" id="dropdown_text">
                  <li>
                    <Link to="CCNA"onClick={closeMobileMenu}>CCNA 200-301</Link>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>CCNA Enterprises</a>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>OSPF|BGP|MPLS</a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item navbarlink">
                <a
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                  href="#"
                >
                  Courses<i className='bx bx-caret-down'></i>
                </a>
                {/* <ul className="dropdown" id="dropdown_text">
                  <li>
                    <Link to="CCNA"onClick={closeMobileMenu}>CCNA 200-301</Link>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>CCNA Enterprises</a>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>OSPF|BGP|MPLS</a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item navbarlink">
                <a
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                  href="#"
                >
                  Page Layout<i className='bx bx-caret-down'></i>
                </a>
                {/* <ul className="dropdown" id="dropdown_text">
                  <li>
                    <Link to="CCNA"onClick={closeMobileMenu}>CCNA 200-301</Link>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>CCNA Enterprises</a>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>OSPF|BGP|MPLS</a>
                  </li>
                </ul> */}
              </li>
              
              <li className="nav-item navbarlink">
                <a
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                  href="#"
                >
                  Our Team<i className='bx bx-caret-down'></i>
                </a>
                {/* <ul className="dropdown" id="dropdown_text">
                  <li>
                    <Link to="CCNA"onClick={closeMobileMenu}>CCNA 200-301</Link>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>CCNA Enterprises</a>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>OSPF|BGP|MPLS</a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item navbarlink">
                <a
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                  href="#"
                >
                  Gallery<i className='bx bx-caret-down'></i>
                </a>
                {/* <ul className="dropdown" id="dropdown_text">
                  <li>
                    <Link to="CCNA"onClick={closeMobileMenu}>CCNA 200-301</Link>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>CCNA Enterprises</a>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>OSPF|BGP|MPLS</a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item navbarlink">
                <a
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                  href="#"
                >
                  Profile<i className='bx bx-caret-down'></i>
                </a>
                {/* <ul className="dropdown" id="dropdown_text">
                  <li>
                    <Link to="CCNA"onClick={closeMobileMenu}>CCNA 200-301</Link>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>CCNA Enterprises</a>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>OSPF|BGP|MPLS</a>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item navbarlink">
                <a
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                  href="#"
                >
                  Contact<i className='bx bx-caret-down'></i>
                </a>
                {/* <ul className="dropdown" id="dropdown_text">
                  <li>
                    <Link to="CCNA"onClick={closeMobileMenu}>CCNA 200-301</Link>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>CCNA Enterprises</a>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>OSPF|BGP|MPLS</a>
                  </li>
                </ul> */}
              </li>
          
              
            
            </ul>
          </div>

          
        </div>
      </nav>
      
    </>
  );
}