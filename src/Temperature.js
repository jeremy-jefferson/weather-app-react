import React, { useState } from "react";
import axios from "axios";
import "./Temperature.css";
import Forecast from "./Forecast";
import TemperatureMobile from "./TemperatureMobile";
import Credits from "./Credits";
import ForecastMobile from "./ForecastMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function Temperature() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data.main.temp);
    setWeatherData({
      temp: response.data.main.temp,
      city: response.data.name,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Temperature margin-top">
        {/*Main container */}
        <div className="container col-bor">
          <div className="row">
            {/*Left Section Desktop*/}
            <div className="col-12 d-none d-lg-block">
              {/*Left Container Desktop*/}
              <div className="container margin-sides col-bor">
                <div className="row">
                  <div className="col-6 col-bor">
                    <h2 className="city">
                      <button
                        type="submit"
                        className="btn btn-desk btn-primary"
                      >
                        Main
                      </button>
                      San Francisco
                    </h2>
                  </div>
                  <div className="col-6 col-bor"></div>
                  {/*Icon*/}
                  <div className="col-6 col-bor">
                    <h2 className="temperature-number">{Math.round(weatherData.temp)}°</h2>
                  </div>
                  {/*Temperature*/}
                  <div className="col-6 col-bor">
                    <h2 className="icon">O</h2>
                  </div>

                  {/*Description*/}
                  <div className="container">
                    <div className="row">
                      {/*Unit convertion buttons*/}
                      <div className="col-6 col-bor">
                        <button type="submit" className="btn  btn-primary">
                          °C
                        </button>
                        <button
                          type="submit"
                          className="btn btn-desk btn-primary"
                        >
                          °F
                        </button>
                      </div>
                      <div className="col-6 col-bor">
                        <h2 className="weather-name">Sunny</h2>
                      </div>
                      <div className="col-6 col-bor">
                        <h3 className="humidity">
                          {" "}
                          <FontAwesomeIcon icon={faTint} /> 80%
                        </h3>
                      </div>
                      <div className="col-6 col-bor">
                        <h3 className="wind">
                          <FontAwesomeIcon icon={faWind} /> 5 km/h
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Left Section Mobile */}
            <TemperatureMobile defaultTemperature={weatherData.temp}/>
            {/*Right container from main container*/}
            <div className="col-12  d-none d-lg-block">
              {/*Right container for Weather*/}
              {/* Weather for Desktop*/}
              <Forecast />
            </div>
          </div>
          {/*Ending of Right Container*/}
        </div>
        {/*Forecast for Mobile*/}
        <ForecastMobile />
        {/*Credits*/}
        <Credits />
      </div>
    );
  } else {
    let city = "San Francisco";
    const apiKey = "62a816282d3b51b7451838a6b7b63934";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
