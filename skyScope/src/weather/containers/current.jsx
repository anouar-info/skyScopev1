import React from "react";
import {
  sun_cloud,
  cloudy,
  sun,
  cloudy_rain,
  thunder,
  tempBar,
  wind,
  pressure,
  compass,
  gauge,
  sunsea,
  sunset,
  sunrise,
  uvBar,
} from "../../assets/weather";
import { WiDayCloudy, WiDaySunny } from "weather-icons-react";
import { FaMinus, FaLocationDot } from "react-icons/fa6";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {Search} from '.';
{ /* ----------- */}
import { useState } from "react";


import { WEATHER_API_URL, WEATHER_API_KEY } from "../../api";



  


{/* -------------------------- */}
const libraries = ["places"];
const mapContainerStyle = {
  width: "30vw",
  height: "38vh",
};

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}
function current(){
  const [center, setCenter] = useState({
    lat: 7.2905715, // default latitude
    lng: 80.6337262, // default longitude
  });
  const [currentDate, setCurrentDate] = useState(getDate());
  const mks= {
    base: "",
    city: "",
    clouds: { all: 0 },
    cod: 0,
    coord: { lon: 0, lat: 0 },
    dt: 0,
    id: 0,
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
      pressure: 0,
      // add other properties as needed
    },
    name: "",
    sys: { country: "", sunrise: 0, sunset: 0 },
    timezone: 0,
    visibility: 0,
    weather: [{ description: "", icon: "", id: 0, main: "" }],
    wind: { speed: 0, deg: 0, gust: 0 },
  };
  const forcast={
    city: "",
    list: [
      // Array of objects, each representing forecast data for a specific time
      {
        dt: 0,
        main: {
          temp: 0,
          feels_like: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          humidity: 0,
          sea_level: 0,
        },
        weather: [
          {
            id: 0,
            main: "",
            description: "",
            icon: "",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 0,
        },
      },
      // Add more objects as needed for the number of forecast days you want to display
    ],
  };
  const [currentWeather, setCurrentWeather] = useState(mks);
  const [forecast, setForecast] = useState(forcast);
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    setCenter({
      lat: lat, // new latitude value
      lng: lon, // new longitude value
    });
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
    }; 

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3iagpac0Y5w_hVhK6lItjFfqX2hjtUrI",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="w-full text-white flex justify-between flex-wrap lg:flex-nowrap">
        <div className="flex flex-col flex-1">
          <div>
            <p className="font-light text-sm">Hi There!</p>
          </div>
          <div>
            <p className="mt-1 font-bold text-md">{currentDate}</p>
          </div>
        </div>
        <div>
        <Search
        onSearchChange={handleOnSearchChange}
      />
        </div>
      </div>
      {/* first row */}
      <div className="mt-12 flex w-full items-start justify-start flex-wrap md:flex-nowrap">
        {/* Current weather */}
        <div className="basis-1/2 mr-4 flex flex-col justify-center items-start py-8 px-2 rounded-3xl sm:px-12 bg-sky-600 text-gray-100">
          <div className="flex justify-around items-center  ">
            <div className="flex flex-col justify-center mx-4">
              <div>
                <div>
                  <img
                    src={sun_cloud}
                    alt="sun_cloud"
                    className="min-h-16 min-w-20 h-24"
                  />
                </div>
                <div className="text-center text-white font-light ">
                {currentWeather.weather[0].description}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="text-left mx-4">
                  <div className=" text-3xl font-semibold">{currentWeather.city}</div>
                  
                </div>
                <div className="mx-4">
                  <div className="text-3xl font-semibold">{Math.round(currentWeather.main.temp)}°C</div>
                  <p className="dark:text-gray-300">Temperature</p>
                </div>
                <div className="mx-4">
                  <div className=" text-3xl font-semibold">19%</div>
                  <p className="dark:text-gray-300">Humidity</p>
                </div>
              </div>
              <div className="mt-2 flex items-center text-right">
                <div className=" mx-4">
                  <p className="dark:text-gray-300">Humidity - {currentWeather.main.humidity}%</p>
                </div>
                <div className=" mx-4">
                  <p className="dark:text-gray-300">feels like - {Math.round(currentWeather.main.feels_like)}°C</p>
                </div>
                <div className=" mx-4">
                  <p className="dark:text-gray-300">Visibility - 15km</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="flex flex-col items-center bg-gray-200 rounded-full py-4 px-2 mx-2  text-sky-900 ">
              <div className=" font-medium">11 pm</div>
              <div>
                <WiDayCloudy size={24} color="#0c4a6e" />
              </div>
              <div className=" font-bold">18°</div>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-full py-4 px-2 mx-2 text-sky-900 ">
              <div className=" font-medium">12 pm</div>
              <div>
                <WiDayCloudy size={24} color="#0c4a6e" />
              </div>
              <div className=" font-bold">17°</div>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-full py-4 px-2 mx-2 text-sky-900 ">
              <div className=" font-medium">01 am</div>
              <div>
                <WiDayCloudy size={24} color="#0c4a6e" />
              </div>
              <div className=" font-bold">17°</div>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-full py-4 px-2 mx-2 text-sky-900 ">
              <div className=" font-medium">02 am</div>
              <div>
                <WiDayCloudy size={24} color="#0c4a6e" />
              </div>
              <div className=" font-bold">15°</div>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-full py-4 px-2 mx-2 text-sky-900 ">
              <div className=" font-medium">03 am</div>
              <div>
                <WiDayCloudy size={24} color="#0c4a6e" />
              </div>
              <div className=" font-bold">16°</div>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-full py-4 px-2 mx-2 text-sky-900 ">
              <div className=" font-medium">04 am</div>
              <div>
                <WiDayCloudy size={24} color="#0c4a6e" />
              </div>
              <div className=" font-bold">17°</div>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-full py-4 px-2 mx-2 text-sky-900 ">
              <div className=" font-medium">05 am</div>
              <div>
                <WiDayCloudy size={24} color="#0c4a6e" />
              </div>
              <div className=" font-bold">17°</div>
            </div>
            <div className="flex flex-col items-center bg-gray-200 rounded-full py-4 px-2 mx-2 text-sky-900 ">
              <div className=" font-medium">06 am</div>
              <div>
                <WiDayCloudy size={24} color="#0c4a6e" />
              </div>
              <div className=" font-bold">18°</div>
            </div>
          </div>
        </div>
        {/* Next day forecast of the  weather */}
        <div className="basis-1/2 flex justify-start text-white ">
          <div className="flex flex-col items-center bg-sky-800 rounded-3xl py-8 px-4 mx-2  ">
            <div className="text-2xl font-medium text-center">Fri</div>
            <FaMinus />
            <div className="my-4">
              <img
                src={sun}
                alt="cloud_moon"
                className="min-h-4 min-w-14 h-14"
              />
            </div>
            <div className="flex justify-start mt-4">
              <div className="">
                <img src={tempBar} alt="templ bar" className=" h-28 w-10" />
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-2xl text-left">18°</span>
                <span className="text-2xl text-left">30°</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-sky-800 rounded-3xl py-8 px-4 mx-2  ">
            <div className="text-2xl font-medium text-center">Sat</div>
            <FaMinus />
            <div className="my-4 ">
              <img
                src={thunder}
                alt="cloud_moon"
                className="min-h-4 min-w-14 h-14"
              />
            </div>
            <div className="flex justify-start mt-4">
              <div className="">
                <img src={tempBar} alt="templ bar" className=" h-28 w-10" />
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-2xl text-left">18°</span>
                <span className="text-2xl text-left">30°</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-sky-800 rounded-3xl py-8 px-4 mx-2  ">
            <div className="text-2xl font-medium text-center">Sun</div>
            <FaMinus />
            <div className="my-4">
              <img
                src={cloudy}
                alt="cloud_moon"
                className="min-h-4 min-w-14 h-14"
              />
            </div>
            <div className="flex justify-start mt-4">
              <div className="">
                <img src={tempBar} alt="templ bar" className=" h-28 w-10" />
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-2xl text-left">18°</span>
                <span className="text-2xl text-left">30°</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-sky-800 rounded-3xl py-8 px-4 mx-2  ">
            <div className="text-2xl font-medium text-center">Mon</div>
            <FaMinus />
            <div className="my-4">
              <img
                src={cloudy_rain}
                alt="cloud_moon"
                className="min-h-4 min-w-14 h-14"
              />
            </div>
            <div className="flex justify-start mt-4">
              <div className="">
                <img src={tempBar} alt="templ bar" className=" h-28 w-10" />
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-2xl text-left">18°</span>
                <span className="text-2xl text-left">30°</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-sky-800 rounded-3xl py-8 px-4 mx-2  ">
            <div className="text-2xl font-medium text-center">Tue</div>
            <FaMinus />
            <div className="my-4">
              <img
                src={cloudy_rain}
                alt="cloud_rain"
                className="min-h-4 min-w-14 h-14"
              />
            </div>
            <div className="flex justify-start mt-4">
              <div className="">
                <img src={tempBar} alt="templ bar" className=" h-28 w-10" />
              </div>
              <div className="flex flex-col justify-between">
                <span className="text-2xl text-left">18°</span>
                <span className="text-2xl text-left">30°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* first row */}
      <div className="mt-12 flex w-full items-start justify-start text-white flex-wrap lg:flex-nowrap">
        <div className="basis-1/2 flex flex-col mr-6">
          <div className="flex">
            <div className="flex items-center bg-sky-800 rounded-3xl py-4 px-6 ml-0 mr-2">
              <div className="flex flex-col">
                <div className="flex">
                  <div>
                    {" "}
                    <img
                      src={wind}
                      alt="wind"
                      className="min-h-4 min-w-6 h-6"
                    />
                  </div>
                  <div className="ml-2 text-lg font-medium">Wind</div>
                </div>
                <div className="flex flex-col mt-4 text-md font-light">
                  <p>Wind is currently </p>
                  <p>{currentWeather.wind.speed} m/s</p>
                </div>
              </div>
              <div className="ml-8">
                {" "}
                <img
                  src={compass}
                  alt="compass"
                  className="min-h-4 min-w-20 h-20"
                />{" "}
              </div>
            </div>
            <div className="flex items-center bg-sky-800 rounded-3xl py-4 pl-4 pr-6 ml-2 mr-2">
              <div className="flex flex-col mr-10">
                <div className="flex">
                  <div>
                    {" "}
                    <img
                      src={pressure}
                      alt="pressure"
                      className="min-h-4 min-w-6 h-6"
                    />
                  </div>
                  <div className="ml-2 text-lg font-medium">Pressure</div>
                </div>
                <div className="flex flex-col mt-4 text-md font-light">
                  <p>Pressure is currently </p>
                  <p>{currentWeather.main.pressure} hPa and steady</p>
                </div>
              </div>
              <div className="ml-8">
                {" "}
                <img
                  src={gauge}
                  alt="gauge"
                  className="min-h-4 min-w-20 h-20"
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col  bg-sky-800 rounded-3xl py-4 pl-4 pr-16 mx-2 my-4">
              <div className="flex items-start">
                <div>
                  {" "}
                  <img
                    src={sunsea}
                    alt="sunsea"
                    className="min-h-4 min-w-6 h-6"
                  />
                </div>
                <div className="ml-2 text-left text-lg font-medium">
                  Sunrise/Sunset
                </div>
              </div>
              <div className="flex items-center justify-between ml-14">
                <div className="flex flex-col mx-2 items-center justify-center mr-6">
                  <div className="flex flex-col mt-4 text-md font-medium">
                    Sunrise
                  </div>
                  <div>
                    <img
                      src={sunrise}
                      alt="sunrise"
                      className="min-h-4 min-w-14 h-14"
                    />
                  </div>
                  <div className="flex flex-col mt-4 text-md font-light">
                    06:28
                  </div>
                </div>
                <div className="flex flex-col mx-2 items-center justify-center">
                  <div className="flex flex-col mt-4 text-md font-medium">
                    Sunset
                  </div>
                  <div>
                    <img
                      src={sunset}
                      alt="sunset"
                      className="min-h-4 min-w-14 h-14"
                    />
                  </div>
                  <div className="flex flex-col mt-4 text-md font-light">
                    18:44
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start bg-sky-800 rounded-3xl py-4 pl-4 pr-16 mx-2 my-4">
              <div className="flex items-start">
                <div>
                  {" "}
                  <WiDaySunny size={24} color="#FFFFFF" />
                </div>
                <div className="ml-2 text-left text-lg font-medium">
                  UV index
                </div>
              </div>
              <div className="flex flex-col pt-8">
                <div className="pb-6">
                  <img
                    src={uvBar}
                    alt="uvBar"
                    className="min-h-4 min-w-14 h-6"
                  />
                </div>
                <div className="text-md font-light">
                  UV index currently is 0.6
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* location */}
        <div className="basis-1/2 flex flex-col justify-start bg-sky-800 rounded-3xl  py-4 px-2 mx-0 mt-2 ">
          <div className="flex items-start">
            <div>
              {" "}
              <FaLocationDot size={24} color="#FFFFFF" />
            </div>
            <div className="ml-2 text-left text-lg font-medium">
              Location : {currentWeather.city}
            </div>
          </div>
          <div className="flex mx-auto ">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
            >
              <Marker position={center} />
            </GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
}

export default current;
