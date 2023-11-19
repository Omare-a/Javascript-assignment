import React from 'react'

function BContactBoxes() {
  return (
    <section className="contact-boxes">
        <div className="container">
            <div className="contact-box">
                <i className="fa-light fa-location-dot"></i>
                <div className="contact-info">
                    <h3>Visit us</h3>
                    <p>Sveavägen 31</p>
                    <p>111 34 STOCKHOLM</p>
                </div>
            </div>
            <div className="contact-box">
                <i className="fa-regular fa-phone"></i>
                <div className="contact-info">
                    <h3>Call us</h3>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="contact-box">
                <i className="fa-regular fa-envelope"></i>
                <div className="contact-info">
                    <h3>Email us</h3>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BContactBoxes