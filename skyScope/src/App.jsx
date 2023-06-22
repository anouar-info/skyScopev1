
import "./App.css";
import { Home,AstronomyPage,WeatherPage } from './pages';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="astronomy" element={<AstronomyPage />} />
        <Route path="weather" element={<WeatherPage />} />
      </Routes>
    
  );
}

export default App;
