import React from "react";
import "../App.css";
import { Navbar, CTA } from "../components";
import {
  Header,
  Astronomy,
  Weather,
  Skymap,
  Blog,
  Footer,
} from "../containers";
const Home = () => {
  return (
    <div>
    <div className="header-gradient">
          <div>
            <Navbar />
          </div>
          <Header />
          </div>
      
      <Astronomy />
      <Weather />
      <Skymap />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
