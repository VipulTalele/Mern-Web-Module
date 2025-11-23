import React, { Component } from "react";
import "./weather.css";

class WeatherComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: [
        { day: "Friday", date: "March 1, 1:00 pm", temp: 35, weather: "sunny" },
        { day: "Saturday", date: "March 2, 1:00 pm", temp: 36, weather: "rain" },
        { day: "Sunday", date: "March 3, 1:00 pm", temp: 36, weather: "cloudy" },
        { day: "Monday", date: "March 4, 1:00 pm", temp: 34, weather: "sunny" },
        { day: "Tuesday", date: "March 5, 1:00 pm", temp: 26, weather: "cloudy" }
      ]
    };
  }

  getIcon(weather) {
    switch (weather) {
      case "sunny":
        return <i className="bi bi-brightness-high-fill icon-sun"></i>;
      case "rain":
        return <i className="bi bi-cloud-rain-fill icon-rain"></i>;
      case "cloudy":
        return <i className="bi bi-cloud-fill icon-cloud"></i>;
      default:
        return <i className="bi bi-question-circle"></i>;
    }
  }

  render() {
    return (
      <div className="weather-container">
        <h1 className="text-center mb-4">5-Day Forecast</h1>

        <div className="card-container">
          {this.state.forecast.map((w, index) => (
            <div className="weather-card" key={index}>
              <h4>{w.day}</h4>
              <p className="date">{w.date}</p>

              <div className="icon">{this.getIcon(w.weather)}</div>

              <h3>{w.temp}°F</h3>
              <p className="weather-text">{w.weather}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default WeatherComponent;
