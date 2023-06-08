import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);

  function handleCity(event) {
    event.preventDefault();

    const apiKey = "93d43dfe3b4a950e5b187e5dc313705e";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showTemperature);
  }

  function showTemperature(response) {
    setWeather(response.data);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleCity}>
        <input
          type="search"
          placeholder="Please Enter a City..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <Results weather={weather} />
      <br />
    </div>
  );
}
