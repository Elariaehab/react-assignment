import { Component } from "react";
import { Link } from "react-router-dom";
import navStyle from './navbar.module.css';

export default class Navbar extends Component {
    render(){
    return (
        <div className={navStyle.nav}>
        <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <Link className="navbar-brand text-white fs-2 fw-bold" to="/">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white fs-5 fw-bold" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5 fw-bold" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fs-5 fw-bold" to="/contact">Contact</Link>
              </li>
              </ul>
          </div>
        </div>
      </nav>
      </div>
    ) 
  }
  }