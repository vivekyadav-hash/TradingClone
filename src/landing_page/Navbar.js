import React from "react";
// import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "white", borderBottom: "1px" }}
    >
      <div class="container p-2">
        <dev class="navbar-brand" >
        <Link to={"/"}>
          <img
            className="logo-img "
            src="/media/images/logo192.svg"
            alt="Zerodha logo"
            style={{width:"20%"}}
          ></img>
          </Link>
        </dev>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to={'/Signup'}>
                Signup
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link " aria-current="page" to={'/About'}>
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to={'/Product'}>
                Product
              </Link>
            </li>
            <li class="nav-item ">
              <Link
                class="nav-link  "
                to={'/Pricing'} >
                Pricing
                </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to={'/Support'} aria-disabled="true">
                Support
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
