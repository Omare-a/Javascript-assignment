import React from 'react'

import paperz from '../../assets/images/paperz.svg'
import dorfus from '../../assets/images/dorfus.svg'
import martino from '../../assets/images/martino.svg'
import square from '../../assets/images/square.svg'
import gobona from '../../assets/images/gobona.svg'

function BSponsors() {
  return (
    <div className="container-fluid commercial">
        <img src={paperz} alt="paperz"/>
        <img src={dorfus} alt="dorfus"/>
        <img src={martino} alt="martino"/>
        <img src={square} alt="square"/>
        <img src={gobona} alt="gobona"/>
    </div>
  )
}

export default BSponsors