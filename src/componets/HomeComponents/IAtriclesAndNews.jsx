import React from 'react'
import { Link } from 'react-router-dom'

import Sales_women from '../../assets/images/sales-women.jpg'
import Chat_gpt from '../../assets/images/chat-gpt.jpg'
import Books from '../../assets/images/books.jpg'


function IAtriclesAndNews() {
  return (
    <section className="articles-and-news">
        <div className="container">

            <div className="heading-and-btn">
                <div className="section-title">
                    <p>Article & News</p>
                    <h2>Get Every Single Articles & News</h2>
                </div>
                <Link to="/Articles" className="btn-transparent" >Browse Articles<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>

            <div className="guide-boxes-flex">
                <div className="guide-box-grid">
                    <div className="date-image"></div>
                    <img src={Sales_women} alt="picture of a woman"/>
                    <p className="business">Business</p>
                    <h3>How To Use Digitalization In The Classroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>

                <div className="guide-box-grid">
                    <div className="date-image"></div>
                    <img src={Chat_gpt} alt="picture of some data"/>
                    <p className="business">Business</p>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>

                <div className="guide-box-grid">
                    <div className="date-image"></div>
                    <img src={Books} alt="picture of books"/>
                    <p className="business">Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>
            </div>

            <div className="circles">
                <button className="circle"></button>
                <button className="circle active"></button>
                <button className="circle"></button>
                <button className="circle"></button>
                <button className="circle"></button>
            </div>
        </div>

    </section>
  )
}

export default IAtriclesAndNews