import React from "react";

import "./Login.css";
import { Link } from 'react-router-dom';
function Login() {
  return (
    <section>
    <div id="login" className="fixed-bottom container-fluid col-lg-2 bg-white shadow-1-strong ">
      <center>
        <h1><i className="fas fa-user-circle"></i></h1>
      </center>

      <form className ="loginform">
        <div className="form-outline mb-4">
        <input type="email"  className="col-lg-10" placeholder="Email Address"/>
          
        </div>

        <div className="form-outline mb-4">
        <input type="password" className="col-lg-10" placeholder="Password"/>
          
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                
              />
              <label className="form-check-label" >
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>
        <Link to='/userpage'>
        <button type="button" className="btn btn-primary btn-block mb-4">
          Sign in
        </button></Link>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
   
    </div>
    </section>
  );
}

export default Login;
