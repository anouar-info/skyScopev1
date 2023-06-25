


import Card from "../../components/Card"
import card1 from "../../assets/card1.png"
import telescope from "../../assets/telescope.png"
import card3 from "../../assets/card3.png"
const Astronomy = () => {
  return (
  <div className=" flex flex-col w-11/12 section__margin justify-evenly" id="astronomy">
    <div className="flex items-center display-center flex-col  ">
      <div><h1 className="  font-extrabold my-4 text-7xl gradient__text">Astronomy</h1></div>
      <div><p className="simple__text text-center "> Astronomy is a natural science that studies celestial objects and phenomena. It uses mathematics, physics, and chemistry in order to explain their origin and evolution. Objects of interest include planets, moons, stars, nebulae, galaxies, and comets.</p></div>
    </div>
    <div className="flex flex-wrap items-center justify-center m-4">
      <Card link="/Astronomy#Phenomina" img={card1} title="Phenomina"  description="We so opinion friends me message as delight. Whole front do of plate heard oh ought   ." /> 
      <Card link="/Astronomy#History" img={telescope} title="History" description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments. " />
      <Card link="/Astronomy#Celetial_Bodies" img={card3} title="Celestial Bodies" description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments. " />
    </div>
  </div>
  
  )
}

export default Astronomy;