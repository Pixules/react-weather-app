import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Liverpool",
    temperature: 14,
    date: "Tuesday 14:25",
    conditions: "Cloudy",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
    humidity: 80,
    wind: 6,
  };

  return (
    <div className="Weather">
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <hr />
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.conditions}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
