import React from 'react'
import WeatherCloudy from '../assets/weather-cloudy.png'

const WeatherCard = ({ weatherDetails }) => {
  // ✅ Guard: don’t render until data exists
  if (!weatherDetails || !weatherDetails.current || !weatherDetails.location) {
    return null;
  }

  return (
    <div className="weather-section">
      <div className="weather-card">
        <div className="weather-temp-c">
          {weatherDetails.current.temp_c}
          <sup>°</sup>
        </div>

        <div className="weather-info">
          <span>🌈 {weatherDetails.current.humidity}%</span>
          <span>🌥️ {weatherDetails.current.cloud}%</span>
        </div>

        <div className="weather-place">
          {weatherDetails.location.name},{" "}
          {weatherDetails.location.region},{" "}
          {weatherDetails.location.country}
        </div>

        <div className="weather-avatar">
          <img src={WeatherCloudy} alt="weather icon" />
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
