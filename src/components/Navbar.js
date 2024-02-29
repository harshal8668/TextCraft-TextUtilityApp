import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {


  return (
    <nav className="navbar navbar-expand-lg theme">
      <div className="container-fluid  ">
        <Link className="navbar-brand fw-bolder" to="/">
          <img src={props.navImg} alt="" width="30" height="24" className="d-inline-block align-text-top mx-2"/>
          {props.title}
        </Link>

        <div className="collapse navbar-collapse mx-3 d-flex justify-content-center align-items-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item fw-bold">
              <Link  to="/" className="nav-link" aria-current="page">{props.link1} </Link>
            </li>
            <li className="nav-item fw-bold">
              <Link to="/about" className="nav-link" >{props.link2}</Link>
            </li>
          </ul>

          <div className="d-flex mx-4 justify-content-center align-items-center">
            <label className="theme-label fw-bold mx-3 text-align"> Themes </label>
            <div onClick={props.toggleDark}  className="border border-2 mx-1 theme-colors"></div>
            <div onClick={props.toggleLight}  className="border border-2 mx-1 theme-colors"></div>
            <div onClick={props.toggleBlue}  className="border border-2 mx-1 theme-colors"></div>
            <div onClick={props.togglePink}  className="border border-2 mx-1 theme-colors"></div>
          </div>

        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes={
    title:PropTypes.string.isRequired,
    link1:PropTypes.string,
    link2:PropTypes.string
}

Navbar.defaultProps={
    link1:"HOME",
    link2:"ABOUT"
}