import React from 'react'
import "./astronomy.css"

import Card from "../../components/card/Card"
import card1 from "../../assets/card1.jpg"
import card2 from "../../assets/card2.png"
import card3 from "../../assets/card3.jpg"
const Astronomy = () => {
  return (
  <div className="astronomy section__margin" id="astronomy">
    <div className="astronomy-header">
      <div><h1 className="title gradient__text">Astronomy</h1></div>
      <div><p className="sub_title simple__text"> Astronomy is a natural science that studies celestial objects and phenomena. It uses mathematics, physics, and chemistry in order to explain their origin and evolution. Objects of interest include planets, moons, stars, nebulae, galaxies, and comets.</p></div>
    </div>
    <div className="astronomy-cards">
      <Card link="/Astronomy#Phenomina" img={card1} title="Phenomina"  description="We so opinion friends me message as delight. Whole front do of plate heard oh ought   ." /> 
      <Card link="/Astronomy#History" img={card2} title="History" description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments. " />
      <Card link="/Astronomy#Celetial_Bodies" img={card3} title="Celestial Bodies" description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments. " />
    </div>
  </div>
  
  )
}

export default Astronomy;