import React from 'react';
import "../App.css";
import { Navbar, CTA } from "../components";
import { Header, Astronomy, Weather, Skymap, Blog, Footer } from "../containers";
const Home = () => {
  return (
  <div>
    
    <div >
        <Navbar />
    </div>
      <Header />
      <Astronomy />
      <Weather />
      <Skymap />
      <CTA />
      <Blog />
      <Footer />
  </div>
  )
}

export default Home