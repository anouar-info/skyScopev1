import { Current, Forecast,Articles,Sidebar } from "../weather/containers";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../containers";
function WeatherPage() {
  return (
    <div>
      <div className="gradient__bg2">
        <Sidebar className="" />
        <Routes >
          <Route path="/" element={<Current />} />
          <Route path="/weather/current" element={<Current />} />
          <Route path="/weather/forecast" element={<Forecast />} />
          <Route path="/weather/articles" element={<Articles />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default WeatherPage;
