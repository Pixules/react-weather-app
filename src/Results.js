import React from "react";

export default function Weather(props) {
  if (props.weather) {
    return (
      <div>
        <h3>Current Conditions in {props.weather.name} are</h3>
        <ul>
          <li>Temperature: {Math.round(props.weather.main.temp)}°C</li>
          <li>Conditions: {props.weather.weather[0].description}</li>
          <li>Humidity: {props.weather.main.humidity} %</li>
          <li>Wind: {Math.round(props.weather.wind.speed)}km/h</li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
