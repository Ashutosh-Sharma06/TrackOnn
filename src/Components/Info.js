import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import "./style.css";
import { Link } from 'react-router-dom';
export default function Info() {
    return (
        <div>
            <section id="hero-animated" className=" hero-animated d-flex align-items-center" data-aos="zoom-out">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative aos-init aos-animate" data-aos="zoom-out">
                    <div className="img-fluid animated "><b><h1>TrackOnn</h1></b></div>
                    <h2>Welcome to <span>TrackOnn</span></h2>
                    <p>Economizing Shopping through our Price Monitoring Software
                    </p>
                    <div className="d-flex aos-init aos-animate" data-aos="fade-up" >
                        <Link to="registration"><button type="button" className="btn btn-outline-success btn-lg">Get Started</button></Link>
                        <Link to="login"><button type="button" className="btn btn-outline-primary btn-lg">Log In</button> </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}
