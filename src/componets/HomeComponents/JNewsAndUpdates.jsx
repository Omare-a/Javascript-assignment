import React from 'react'
import { Link } from 'react-router-dom'

import background_wavy_lines from '../../assets/images/background-wavy-lines.svg'

function JNewsAndUpdates() {
  return (
    <section className="news-updates">
            <img className="section-nine-lines" src={background_wavy_lines} alt="lines"/>
            <div className="container section-title">
               <h2>Get News Updates By Signup</h2>
               <div className="subscribe-box">
                  <form className="mail-window">
                    <input type="text" placeholder="username@domain.com"/>
                  </form>
                  <Link to="/"><button className="btn">Subscribe<i className="fa-regular fa-arrow-up-right"></i></button></Link>
               </div>
            </div>
    </section>
  )
}

export default JNewsAndUpdates