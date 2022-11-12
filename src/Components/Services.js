import React from 'react'
import "./style.css"
import Aos from 'aos';
import "aos/dist/aos.css";

export default function Services() {


    return (

        <section id="services" className="services">
            <div className="container">
                <center>
                    <div className="section-title aos-init aos-animate" data-aos="fade-up">

                        <h2>Services</h2>
                        <hr />

                    </div>
                </center>
                <div className='row section'>
                    <div className="icon-box col-lg-6 card aos-init aos-animate" data-aos="fade-up" style={{ width: "25rem", marginLeft: "15%" }}>
                        <div className="card-header bg-light title">Price Monitoring</div>
                        <div className="card-body">
                       <center> <h5 className="card-title">Monitor prices on the go</h5></center>
                            <p className="card-text"><h6 style={{paddingTop: "10%" }}>We provide the best price monitoring system to the user. Our system works effectively and is very easy-to-use. We have also tested the software for reliablity. </h6></p>
                        </div>

                    </div>
                    <div className="icon-box col-lg-6 card aos-init aos-animate" data-aos="fade-down" style={{ width: "25rem", marginLeft: "10%" }}>
                        <div className="card-header bg-light title">Notification on best price</div>
                        <div className="card-body">
                            <h5 className="card-title">Get notified when the price is least*</h5>
                            <p className="card-text"><h6 style={{paddingTop: "10%" }}>TrackOnn informs the user about the lowest price point of an article within a range of one week and one month. The Notification is sent to the user on the registered email address</h6></p>
                        </div>

                    </div>
                    <div className="icon-box col-lg-6 card  mb-3 aos-init aos-animate" data-aos="fade-up" style={{ width: "25rem", marginLeft: "15%" }}>
                        <div className="card-header bg-light title">Trend Generation</div>
                        <div className="card-body">
                            <h5 className="card-title">Visualize the change in prices</h5>
                            <p className="card-text"><h6 style={{paddingTop: "10%" }}>We at TrackOnn predict the best price of the product and the day when it is going to be the least. For this purpose we use predictive data analysis</h6></p>
                        </div>

                    </div>
                    <div className="card icon-box col-lg-6 mb-3 aos-init aos-animate" data-aos="fade-down" style={{ width: "25rem", marginLeft: "10%" }}>
                        <div className="card-header bg-light title">Best Price Prediction</div>
                        <div className="card-body">
                        <h5 className="card-title">Get future insights</h5>
                            <p className="card-text"><h6 style={{paddingTop: "10%" }}>We at TrackOnn predict the best price of the product and the day when it is going to be the least. For this purpose we use predictive data analysis</h6></p>
                                            </div>

                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </section>


    )
}
