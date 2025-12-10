import React from 'react';

const WeatherDetails = ({ data }) => {
  const details = [
    { label: 'Humidity', value: `${data.humidity}%`, icon: '💧' },
    { label: 'Wind Speed', value: `${data.windSpeed} km/h`, icon: '💨' },
    { label: 'Pressure', value: `${data.pressure} hPa`, icon: '📊' },
    { label: 'Visibility', value: `${data.visibility} km`, icon: '👁️' },
    { label: 'Sunrise', value: data.sunrise, icon: '🌅' },
    { label: 'Sunset', value: data.sunset, icon: '🌇' },
    { label: 'Min Temp', value: `${data.tempMin}°`, icon: '⬇️' },
    { label: 'Max Temp', value: `${data.tempMax}°`, icon: '⬆️' },
  ];

  return (
    <div className="weather-details">
      <h3>Weather Details</h3>
      <div className="details-grid">
        {details.map((detail, index) => (
          <div key={index} className="detail-card">
            <div className="detail-icon">{detail.icon}</div>
            <div className="detail-info">
              <span className="detail-label">{detail.label}</span>
              <span className="detail-value">{detail.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;