import React from 'react'
import "./weather.css";
import { sun_cloud } from '../../assets';
import { Section } from '../../components';
import { star } from '../../assets';
const Weather = () => {
  return (
    <div className="weather section__margin" id="weather">
    <div className="weather-content">
       <div className="header">
         <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
         <a href="#astronomy"><p>Request Early Access to Get Started</p></a>
       </div>
       <div className='sections'>
           <div className="Section"><Section logo={star} title="Current Weather" text="The best credit cards offer some tantalizing combinations of promotions and prizes"></Section></div>
           <div className="Section"><Section logo={star} title="Forecast" text="The best credit cards offer some tantalizing combinations of promotions and prizes"></Section></div>
           <div className="Section"><Section logo={star} title="History" text="The best credit cards offer some tantalizing combinations of promotions and prizes"></Section></div>
       </div>
    </div>
    <div className="weather-icon">
       <div className="weather-image" >
         <img src={sun_cloud} alt="sun_cloud" />
       </div>
       <div className="weather-input" >
          <input type="email" placeholder="Enter Your City" />
          <button type="button">Forecast it</button>
       </div>
    </div>
    
    </div>
    
    
  )
}

export default Weather