import React from "react";
import { Current, Forecast, Articles, Sidebar } from "../weather/containers";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../weather/containers";

function WeatherPage() {
  return (
    <div>
      <div className=" font-weather gradient__bg2">
      <div className="flex ">
        <Sidebar />
        <div className="w-full flex bg-sky-950 rounded-lg border border-gray-700 shadow justify-center items-start p-6 mt-14 mx-8">
        <Routes>
          <Route path="home" element={<Current />} />
          <Route path="forecast" element={<Forecast />} />
          <Route path="articles" element={<Articles />} />
        </Routes>
        </div>
        </div>
         <Footer /> 
      </div>
    </div>
  );
}

export default WeatherPage;
