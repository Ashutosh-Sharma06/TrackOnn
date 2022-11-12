import React from 'react'
import "./style.css";
import Aos from 'aos';
import "aos/dist/aos.css";

export default function About() {


  return (

    <div>
      
      <section id="services" className="services">
       
        <div className="container">

          <div className="section-title aos-init aos-animate" data-aos="fade-up">

            <center><h2>About Us</h2></center>
            <hr />
          </div>
       
          <div className="col-md-12 col-lg-12 d-flex align-items-stretch mb-5 mb-lg-3">
            <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i class="fas fa-balance-scale"></i></div>
              <h4 className="title col-lg-12">TrackOnn URL Monitoring Service</h4>
              <p className="description">We provide an advance and intelligent software that helps you to find out the perfect deal for you by using the concept of URL monitoring. This service is subscription-free and helps the user to save a lot of money</p>
            </div>
          

              <div className="icon-box aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i class="fas fa-hand-holding-usd"></i></div>
                <h4 className="title ">How it works?</h4>
                <p className="description">All you want in3 simple steps:
                  <ol>
                    <li>Copy the URL of the item you want</li>
                    <li>Log In to TrackOnn and add your item by pasting the URL</li>
                    <li>You're all Set!! Get trends of the price of the item for free</li></ol></p>
              </div>
             
          </div>

        </div>
   
      </section>
      
    </div>
 
  )
}
