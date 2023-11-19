import React from 'react'
import { Link } from 'react-router-dom'

import Women_with_laptop_Resposive from '../../assets/images/women-with-laptop2.jpg'
import Women_with_laptop from '../../assets/images/women-with-a-laptop.jpg'

function DAboutCompany() {
  return (
    <section className="about-company">
        <div className="container">
            <div className="content">
                <img src={Women_with_laptop_Resposive} className="img2" alt=""/>
                <img src={Women_with_laptop} alt="women holding a laptop"/>
                <aside>
                    <h3>Samantha Brown, </h3>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </aside>
            </div>

            <div className="section-title">
                <p>About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br/><br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci
                    accusantium libero provident voluptate amet.
                </p>
                <div className="button">
                    <Link to="/Learn-More" className="btn-black">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
                    <Link to="/Services" className="btn-play"><i className="fa-regular fa-circle-play"></i>Intro Video</Link>
                </div>
            </div>
       
            
        </div>
    </section>
  )
}

export default DAboutCompany