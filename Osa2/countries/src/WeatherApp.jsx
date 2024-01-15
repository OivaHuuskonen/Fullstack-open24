import { useEffect, useState } from 'react';
import Icons from './components/Icons';

const WeatherApp = ({ selectedCountry }) => {
const [values, setValues] = useState(null)
const [icon, setIcon] = useState(null)

useEffect(() => {
  const fetchData = async () => {
    if (selectedCountry) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.capital}&appid=ead038bbc72fbd1287422f587030fee1&units=metric`;

      try {
        const response = await fetch(URL);
        const data = await response.json();
        if (data.cod >= 400) {
          setValues(null);
          setIcon(null);
        } else {
          setIcon(data.weather[0].main);
          setValues(data);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  fetchData();
}, [selectedCountry]);

    
      return (
          <div className="app">
            <div className="container">
              <div className="top">
              <div className="temp">
                 {values ? <p>Weather in {values ? values.name : ''} is now: {values.main.temp.toFixed()} °C and {values ? values.weather[0].main : ''} </p> : null}
              </div>              
              <div className="icon_c"> 
                {icon && (
              <img className='icon' src={Icons(icon)} alt="icon-weather" />
                )}
              </div>
              </div>
          
                  {values && (
                  <div className="bottom">
                    <div className="feels">
                        { values.main ? <p>it feels Like {values.main.feels_like.toFixed()}°C</p> : null}
                          
                    </div>
                    <div className="humidity">
                     {<p>Humidity {values.main.humidity}%</p>}  
                    </div>
                    <div className="wind">
                    {values.wind ? <p>Wind speed {values.wind.speed.toFixed()} MPH</p> : null}
                    </div>
                  </div>
                  )}
              </div>
              </div>
              );
            }

export default WeatherApp;