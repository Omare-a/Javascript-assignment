import React from 'react'
import { Link } from 'react-router-dom'
import two_women_talking from '../../assets/images/two-women-talking.jpg'


function FWhyChooseUs() {
  return (
    <section className="why-choose-us">
        <div className="container">
            <div className="section-title">
                <p>Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>
                <li>
                    <Link to="">
                    <i className="fa-light fa-thumbs-up"></i>
                    <h3>Process Excellence</h3>
                    <p className="content-p">Lorem, ipsum dolor sit amet consectetur.</p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                    <i className="fa-brands fa-connectdevelop"></i>
                    <h3>Strategic Planning</h3>
                    <p className="content-p">Lorem, ipsum dolor sit amet consectetur.</p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                    <i className="fa-light fa-pen-nib"></i>
                    <h3>Experience Design</h3>
                    <p className="content-p">Lorem, ipsum dolor sit amet consectetur.</p>
                    </Link>
                </li>
                <li>
                    <Link to="">
                    <i className="fa-light fa-head-side-gear"></i>
                    <h3>Artificial Inteligence</h3>
                    <p className="content-p">Lorem, ipsum dolor sit amet consectetur.</p>
                    </Link>
                </li>
            </div>
            <img src={two_women_talking} alt="two women talking sit at desk and talk"/>
        </div>
        <div className="blank"></div>
    </section>
  )
}

export default FWhyChooseUs