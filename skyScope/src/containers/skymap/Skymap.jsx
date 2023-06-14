import React from 'react'
import "./skymap.css"
import { skymap } from '../../assets'
const Skymap = () => {
  return (
    <div className='skymap section__margin' id='skymap'>
       <div className='skymap-content'>
          <h1 className='gradient__text'>Discover the beauty of the sky with our interactive sky map. </h1>
          <p className='simple__text'>Explore the constellations, stars, and planets in real-time and learn more about the universe. With just a few clicks, you can locate celestial objects, observe their movements, and gain a deeper understanding of the night sky. Whether you&apos;re an amateur astronomer or a seasoned stargazer, our sky map is designed to provide you with an immersive and educational experience.</p>
          <a href="#skymap"><p>Explore more...</p></a>
       </div>
       <div className='skymap-image'>
          <img src={skymap} alt="skymap" />
       </div>
    
    </div>
  )
}

export default Skymap