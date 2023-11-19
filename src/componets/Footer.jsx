import React from 'react'
import { Link } from 'react-router-dom'

import logotype_white from '../assets/images/logotype-white.svg'

function Footer() {
  return (
    <footer>
         <section className="container">
            <div className="child-info">

               <li className=" grid-info-citro">
                  <Link to="/"><img src={logotype_white} alt="citro logo"/></Link>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
               </li>

               <Link to="/" className="grid-info">
                  <h4>Company</h4>
                  <p>About</p> <p> Features</p> <p> Works </p><p> Career
                  </p>
               </Link>

               <Link to="/" className="grid-info">
                  <h4>Help</h4>
                  <p>Customer Support </p><p> Delivery Details</p> <p> Terms & Conditions</p> <p> Privacy Policy</p>
               </Link>

               <Link to="/" className="grid-info">
                  <h4>Resources</h4>
                  <p>Free eBooks</p> <p> Development Tutorial </p><p> How to - Blog </p><p> Youtube Playlist</p>
               </Link>

               <Link to="/" className="grid-info">
                  <h4>Link</h4>
                  <p>Free eBooks </p><p> Development Tutorial </p><p> How to - Blog </p><p> Youtube Playlist</p>
               </Link>
            </div>


           
         </section>

         <section className="parent-social container-fluid">
            <div className="container child-social ">
               <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>

               <div className="socials">
                  <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
               </div>

            </div>

         </section>
      </footer>
  )
}

export default Footer