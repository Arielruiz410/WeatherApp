import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20} 
            weatherState={'sun'}>
        </WeatherTemperature>
        <WeatherExtraInfo 
            humidity={80} 
            wind={'10m/s'}>
        </WeatherExtraInfo>
    </div>
);
export default WeatherData;