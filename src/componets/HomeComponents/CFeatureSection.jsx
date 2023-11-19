import React from 'react'
import { Link } from 'react-router-dom'

function CFeatureSection() {
  return (
    <section className="container features">
            
        <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <Link to="/Learn-More" className="btn-yellow">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
        </div>
        
        <div className="parent">

            <div className="box">
                <i className="fa-regular fa-handshake"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>                  
            </div>
            <div className="box">
                <i className="fa-solid fa-lightbulb-exclamation-on"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="box">
                <i className="fa-sharp fa-solid fa-chart-mixed-up-circle-dollar"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="box">
                <i className="fa-light fa-box-check"></i>
                <h3>Risk Management</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </section>
  )
}

export default CFeatureSection