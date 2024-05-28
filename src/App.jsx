import React, { useEffect, useState } from 'react'
import SearchForm from './components/SearchForm'
import Card from './components/Card'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import {api, api_key } from "./api/api"

const App = () => {
  
  const [country,setCountry] = useState('Yangon');
  const [item,setItem] = useState({});

  const fetchWeather = async () => {
    const res = await api.get(`/weather?q=${country}&appid=${api_key}`)
    setItem(res.data);
  }

  useEffect(()=>{
    fetchWeather();
  },[])

  return (
    <div className='min-vh-100 d-flex justify-content-center align-items-center'>
        <div className='w-50 rounded'>
          <SearchForm/>
          <Card  item={item}/>
        </div>
    </div>
  )
}

export default App