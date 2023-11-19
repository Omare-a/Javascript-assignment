import React from 'react'

import background_lines from '../../assets/images/background-lines.svg'

function AShowCase() {
  return (
    <section className="showcase articles">
        <img className="background-lines" src={background_lines} alt="background-lines"/>
        
        <div className="container">
            <div className="content">
                <div className="home-news-p">
                    <a href="">Home</a>
                    <a href="">News</a>
                </div>
                <h1>Let’s Connect</h1>
            </div>

        </div>
    </section>
  )
}

export default AShowCase