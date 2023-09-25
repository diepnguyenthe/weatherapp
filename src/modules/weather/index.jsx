import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeatherDetail from "./components/WeatherDetail";
const locationList = [
  {
    id: 0,
    text: "Hà Nội",
    value: {
      lat: 21.028511,
      lon: 105.804817,
    },
  },
  {
    id: 1,
    text: "TP.Hồ Chí Minh",
    value: {
      lat: 10.762622,
      lon: 106.660172,
    },
  },
  {
    id: 2,
    text: "Huế",
    value: {
      lat: 16.463713,
      lon: 107.590866,
    },
  },
];

const WeatherModule = () => {
  const weather = useSelector((state) => state.weather.weather);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "FETCH_WEATHER",
      location: locationList[0].value,
    });
  }, []);
  return (
    <div className="container">
      <WeatherDetail currentWeather={weather} />
    </div>
  );
};

export default WeatherModule;
