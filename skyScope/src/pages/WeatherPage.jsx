import React from 'react'
import { Navbar, WeatherContent } from "../components";
import { Footer } from "../containers";
function WeatherPage() {
  
  return (
    <div>
      <div className="gradient__bg2">
        <Navbar />
      
      <WeatherContent />
      <Footer />
      </div>
    </div>
  );
}

export default WeatherPage