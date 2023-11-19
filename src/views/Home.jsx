import React from 'react'
import Header from '../componets/Header'
import AShowcaseSectionn from '../componets/HomeComponents/AShowcaseSection'
import BSponsors from '../componets/HomeComponents/BSponsors'




import Footer from '../componets/Footer'
import DAboutCompany from '../componets/HomeComponents/DAboutCompany'
import EOurService from '../componets/HomeComponents/EOurService'
import FWhyChooseUs from '../componets/HomeComponents/FWhyChooseUs'
import GProjectAndCase from '../componets/HomeComponents/GProjectAndCase'
import HMeetOurTeam from '../componets/HomeComponents/HMeetOurTeam'
import IAtriclesAndNews from '../componets/HomeComponents/IAtriclesAndNews'
import JNewsAndUpdates from '../componets/HomeComponents/JNewsAndUpdates'
import CFeatureSection from '../componets/HomeComponents/CFeatureSection'


function Home() {
  return (
    <div className='wrapper'>
    <Header/>
    <main>
      <AShowcaseSectionn/>
      <BSponsors/>
      <CFeatureSection/>
      <DAboutCompany/>
      <EOurService/>
      <FWhyChooseUs/>
      <GProjectAndCase/>
      <HMeetOurTeam/>
      <IAtriclesAndNews/>
      <JNewsAndUpdates/>
    </main>
    <Footer/>
    </div>
  )
}

export default Home