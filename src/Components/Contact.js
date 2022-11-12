import React from 'react'
import "./style.css";
const sub=() =>{
    alert("Message sent");
}
export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title aos-init aos-animate" data-aos="fade-up" >
          <h2>Contact Us</h2>
          <hr/>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-about">
              <h3>TrackOnn Systems</h3>
              <p><b>We</b> are not just a company, we a family working together to fulfil our desires.</p>
              <div className="social-links">
                
              <br/> <br/> <br/> <br/> <br/> <br/>

                <a href="#" className="instagram" style={{backgroundColor: "green", width:"10em", color: "white" }}>Back to top</a>
               
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="info">
              <div>
                <i className="-map-pin-line"></i>
                <p>NIET, Greater Noida, Gautam Budha Nagar<br/>Uttar Pradesh, India, 201306</p>
              </div>

              <div>
                <i className="ri-mail-send-line"></i>
                <p><a href="mailto: trackonnsoftware.com">E-mail</a></p>
              </div>
			  <div>
                <i className="ri-mail-send-line"></i>
				<p><a href="mailto: shivendrachauhan1234@gmail.com">Hepline</a></p>
              </div>

              <div>
                <i className="ri-phone-line"></i>
                <p><a href="tel: +917983320559">Mobile</a></p>
              </div>

            </div>
          </div>

          <div className="col-lg-4 col-md-12 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
            <form action="forms/contact.php" className="php-email-form" name="contact" id="contactform">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"/>
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div id="msg" className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit" id="submit-btn" onClick={sub}>Send Message</button></div>
            </form>
          </div>

        </div>

      </div>\

      <footer className="bg-dark text-center text-white">
  
  <div className="text-center p-3" >  
    © 2022 Copyright: 
      TrackOnn
  </div>
  
</footer>
    </section>
  )
}
