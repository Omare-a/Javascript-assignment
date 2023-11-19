import React from 'react'
import Header from '../componets/Header'
import Footer from '../componets/Footer'
import AShowCase from '../componets/ContactComponets/AShowCase'
import BContactBoxes from '../componets/ContactComponets/BContactBoxes'
import CMessage from '../componets/ContactComponets/CMessage'

function Contacts() {
  return (
    <div className='wrapper'>
    <Header/>
    <main>
        <AShowCase/>
        <BContactBoxes/>
        <CMessage/>

    </main>
    <Footer/>
    </div>
  )
}

export default Contacts