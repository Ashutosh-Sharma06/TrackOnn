import React from 'react'
import "./style.css";
import "./custom.css";
import "aos/dist/aos.css";
export default function Whychoose() {
  return (
    <section id="why-us" className="why-us">
      <div className="container-fluid aos-init aos-animate" data-aos="fade-up">

        <div className="section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Why choose us?</h2>
          <p></p>
        </div>

        <div className="row">

          <div className="imagethis col-lg-5 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
            <div className="why-us-img">
              <img src="./images/img2.jpeg" className="img-fluid"/>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="why-us-content">
              <p className="txt-justify">
                We are highly committed to our goals. We invest our resources to create world-class easy to use software and applications for the enterprise business with the top notch, on the edge technology expertise.
              </p>
              <br/>
              <div className="features clearfix aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box">
                  <i className="ri-gradienter-line" ></i>
                  <h3><a>Excellent Service at Zero Cost</a></h3>
                </div>
                <p className="txt-justify">TrackOnn provides price monitoring service at zero cost. We work with the latest technologies to provide the best services to our clients. We always try our best to give our best. </p><br/>
              </div>

              <div className="features clearfix aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <i className="ri-gradienter-line" ></i>
                  <h3><a>Get Notification on mail</a></h3>
                </div>
                <p className="txt-justify">TrackOnn provides the notification service to our clients and send a notifictaion whenever it is the best time to buy!</p><br/>
              </div>

              <div className="features clearfix aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div className="icon-box">
                  <i className="ri-gradienter-line" ></i>
                  <h3><a>Economical</a></h3>
                </div>
                <p className="txt-justify">Trackonn provides you with the best deals so that you can save your precious money. Get your desired product at the cheapest rates!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
