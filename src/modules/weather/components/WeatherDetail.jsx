import React from "react";
import Image from "../../../assets/Image.png";
const WeatherDetail = ({ currentWeather }) => {
  console.log(currentWeather);
  return (
    currentWeather && (
      <div className="weather-detail">
        <img src={Image} alt="" className="weather-detail__background" />
        <div className="weather-detail__wrapper">
          <div className="weather-detail__weather">
            <div className="weather-detail__weather-name">
              {currentWeather.name}
            </div>

            <div className="weather-detail__weather-temperature">
              {currentWeather.main.temp.toFixed(0)}°C
            </div>
            <div className="weather-detail__weather-more">
              <span>
                Feel like: {currentWeather.main.feels_like.toFixed(0)}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default WeatherDetail;
