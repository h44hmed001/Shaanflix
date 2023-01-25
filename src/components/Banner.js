import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

const Banner = () => {
  const [movies,setMovies]=useState([])
  const movie=movies[Math.floor(Math.random()*movies.length)]
  useEffect(()=>{
    axios.get(requests.requestPopular).then(response=>{setMovies(response.data.results)})
  },[])
  console.log(movie)
  function truncate(str, num) {
    if(str.length>num){
      return str.slice(0,num)+"..."
    }
    return str
  }
  return (
  <div className='w-full h-[550px] text-white'>
    <div className='w-full h-full'>
      <img className='w-full h-full object-cover bg-top' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt=""/>
      <div>
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
        <div className='mt-4'>
        <button className='text-black  bg-gray-100  py-2 px-10 rounded hover:bg-gray-300'>Play</button>
        <button style={{"backgroundColor": "rgba(109, 109, 110, 0.8)",
      }} className=' text-white  py-2 px-10 ml-4 rounded hover:opacity-50'>More Info</button>
        </div>
        <div>
        <p className='w-full md:max-w-[70%] lg:max-w-[35%] font-bold text-gray-200  mt-2'>{movie?.overview}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
  )




}

export default Banner
