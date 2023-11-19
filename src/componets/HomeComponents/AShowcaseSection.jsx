import React from 'react'

import background_lines from '../../assets/images/background-lines.svg'
import showcase_image from '../../assets/images/showcase-image.svg'
import { Link } from 'react-router-dom'

function AShowcaseSection() {
  return (
    <section className="showcase">
      <img className="background-lines" src={background_lines} alt="background-lines" />
      <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <Link to="/Consulting" className="btn-yellow">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></Link>
            <Link to="/Services" className="btn-transparent">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>

        </div>
        <img src={showcase_image} alt="image of a man in a suit with a tablet"/>

      </div>

    </section>
  )
}

export default AShowcaseSection