import React from 'react'
import { Link } from 'react-router-dom'

import Kristine from '../../assets/images/kristine.jpg'
import Mark from '../../assets/images/mark.jpg'
import Kimberly from '../../assets/images/Kimberly.jpg'
import Justin from '../../assets/images/Justin.jpg'
import Cassandra from '../../assets/images/cassandra.jpg'
import Amanda from '../../assets/images/amanda.jpg'
import Jack from '../../assets/images/jack.jpg'



function HMeetOurTeam() {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="section-box">
                <div className="section-title">
                    <p>Meet Our Team</p>
                    <h2>Experience Team Members</h2>
                </div>
                <a href="#" className="btn-yellow">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="parent">
                <div className="employees">
                    <div className="employee">
                    <img src={Kristine} className="kristine" alt="picture-of-a-women"/>
                    <h3>Kristine Palmer</h3>                        
                    <p>Chef Operation Officer</p>
                    </div>

                    <div className="employee">
                    <img src={Mark} className="mark" alt="picture-of-a-men"/>
                    <h3>Mark Aubri</h3>                     
                    <p>Senior Consultant</p>
                    </div>

                    <div className="employee">
                    <img src={Kimberly} className="Kimberly" alt="picture-of-a-women-sitting"/>
                    <h3>Kimberly Hansen</h3>
                    <p>Senior Consultant</p>
                    </div>

                    <div className="employee">
                    <img src={Justin} className="Justin" alt="picture-of-a-men"/>
                    <h3>Justin Willoman</h3>
                    <p>Senior Tech Consultant</p>
                    </div>
                </div>

                <div className="circles">
                    <button className="circle c1"></button>
                    <button className="circle c2"></button>
                    <button className="circle c3"></button>
                    <button className="circle c4"></button>
                </div>

            </div>

            

            <div className="testimonial">
                <div className="section-title">
                    <p>Testimonial</p>
                    <h2>What Our Client Says</h2>
                </div>
                <div className="reviews">
                    <div className="rating-box">
                    <div className="star-box">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="the-client">
                        <img src={Cassandra} alt="picure of a women"/>
                        <h3 className="name">Cassandra Warren</h3>
                        <p>Business Manager, Dorfus</p>
                    </div>
                    </div>
                    
                    <div className="rating-box">
                    <div className="star-box">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="the-client">
                        <img src={Amanda} alt="picture of a women leaning"/>
                        <h3 className="name">Amanda Tulling</h3>
                        <p>Senior Developer, Square</p>
                    </div>
                    </div>
                    
                    <div className="rating-box">
                    <div className="star-box">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="the-client">
                        <img src={Jack} alt="picture of a man"/>
                        <h3 className="name">Jack McDogglas</h3>
                        <p>Key Account Manager, Gobona</p>
                    </div>
                    </div>
                    
                </div>
                <Link to="" className="btn-black">All Reviews<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>

        </div>
    </section>
  )
}

export default HMeetOurTeam