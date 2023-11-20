import React from 'react'
import Footer from '../componets/Footer'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
    <div className='notfound'>
      <div className="container">
      <div className='fourofour'>
        404NotFound
      </div>
      <Link to="/"><button className="btn-black">Go Back Home<i className="fa-regular fa-arrow-up-right"></i></button></Link>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default NotFound