import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav id="thisnav" className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#" style={{ color: "green" }}><b><h2>TrackOnn</h2></b> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">Home</a>
            </li>

            <li className="nav-item">
              <Link to="about" className='nav-link'>About</Link>
            </li>
            <li className="nav-item">
              <Link to="services" className='nav-link' >Services</Link>
            </li>
            <li className="nav-item">
              <Link to="whychoose" className='nav-link'>Features</Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className='nav-link'>Contact</Link>
            </li>


            
          </ul>
          <form className="d-flex" role="search">
          <Link to="registration">
            <button className="btn bg-light" type="submit">Sign up</button>
            </Link>
          </form>
        </div>
      </div>

    </nav>
  )
}
