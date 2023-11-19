import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import logo from '../assets/images/Logo.svg'


function Header() {
   const contact = "/Contacts";
  return (
    <header>
         <div className="container">
            <Link to='/'><img src={logo} alt="citro logo"/></Link>
            <button className="meny-bars"><i className="fa-solid fa-bars"></i></button>
            <nav className="meny">
               <ul className="top-meny">
                  <div className="contact-info">
                     <li>
                        <i className="fa-regular fa-phone-volume"></i>
                        +46 (8) 121 470 50
                     </li>
                     <li>
                        <i className="fa-regular fa-envelope"></i>
                        info@citro.com
                     </li>
                     <li className="last">
                        <i className="fa-regular fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                     </li>
                  </div>
                  <div className="social-media">
                     <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                     <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                     <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                     <a href="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                  </div>
               </ul>
               <ul className="bottom-meny">
                  <div>
                     <NavLink to="/">Home</NavLink>
                     <NavLink to="/Services">Service</NavLink>
                     <NavLink to="/News">News</NavLink>
                     <NavLink to={contact}>Contact</NavLink>
                  </div>
                  <Link href="#" className="btn-yellow">Login <i className="fa-regular fa-arrow-up-right"></i></Link>
               </ul>
            </nav>
         </div>   
      </header>

  )
}

export default Header