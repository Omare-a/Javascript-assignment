import React from 'react'
import { Link } from 'react-router-dom'

import man_holding_a_newspaper from '../../assets/images/man-holding-a-newspaper.jpg'
import laptop_on_a_table from '../../assets/images/laptop-on-a-table.jpg'
import pen_and_notebook from '../../assets/images/pen-and-notebook.jpg'
import laptop_on_table from '../../assets/images/laptop-on-table.jpg'


function GProjectAndCase() {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Let’s Looks Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                <Link to="/" className="project">
                    <img src={man_holding_a_newspaper} alt="man holding a newspaper"/>
                    <h3>Grow your business</h3>
                    <article className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></article>
                </Link>
                <Link to="/" className="project">
                    <img src={laptop_on_a_table} alt="pink ipad on a table"/>
                    <h3>Why your client needs a responsive website</h3>
                    <article className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></article>
                </Link>
                <Link to="/" className="project">
                    <img src={pen_and_notebook} alt="desk with office supplies"/>
                    <h3>Educate your employees to get better results</h3>
                    <article className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></article>
                </Link>
                <Link to="/" className="project">
                    <img src={laptop_on_table} alt="laptop with business intelligence Insights"/>
                    <h3>Business Insights is a important piece of your business</h3>
                    <article className="readmore">Read More<i className="fa-regular fa-arrow-up-right"></i></article>
                </Link>
            </div>
            <div className="center-content">
            <Link to="/projects"><button className="btn-black">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></button></Link>
            </div>
        </div>
    </section>
  )
}

export default GProjectAndCase