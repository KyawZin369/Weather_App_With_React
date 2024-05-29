/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Card = ({item}) => {

  // To Captialize Letter

  const CaptializeLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if(JSON.stringify(item) === '{}'){
    return(
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    )
  }


  if(JSON.stringify(item) !== '{}'){
    return (
      <div className=' bg-secondary-subtle mx-5 my-5 rounded'>
          <div className='pt-4 pb-4 d-flex flex-column align-items-center'>
              <Clock value={value}  className='my-2'/>
              <h1 className='mb-3'>{item.name}, {item.sys.country}</h1>
              <h2><img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} /> {parseFloat((item.main.temp - 273.15).toFixed(2))}°C</h2>
              <p>Feels like { parseFloat((item.main.feels_like - 273.15).toFixed(2)) }°C. {CaptializeLetter(item.weather[0].description)}.</p>
              <div>
                <div className='mb-3'><span className='fw-bold'>Humidity : { item.main.humidity } %</span></div>
                <div className='mb-3'><span className='fw-bold'>Visibility : {item.visibility / 1000}km</span></div>
              </div>
          </div>
      </div>
    )
  }
}

export default Card