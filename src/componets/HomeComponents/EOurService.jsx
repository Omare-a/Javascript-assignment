import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

function EOurService() {

    const [blogs, setBogs] = useState([
        {title:'Business Advice', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus'},
        {title:'Business Advice', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus'},
        {title:'Business Advice', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus'},
        {title:'Business Advice', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus'}
    ])

  return (
    <section className="our-service">
        <div className="container">
            <div className="section-title">
                <p>Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>
            </div>
            <ul className="content-parent">
                {blogs.map((blog) => (
                    <Link to="/" className="content-child" >
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                        <i className="fa-thin fa-circle-arrow-right"></i>
                    </Link>
                ))}
            </ul>
            <Link to="Browse-Services" className="btn-transparent">Browse Services<i className="fa-regular fa-arrow-up-right"></i></Link>
        </div>
   
    </section>
  )
}

export default EOurService