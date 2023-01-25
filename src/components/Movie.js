import React from 'react'

const Movie = ({item,key}) => {
    const base_url="https://image.tmdb.org/t/p/w500/"
  return (
    <div className=" inline-block w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] p-2 ">
        <img className="hover:w-[280px]" src={`${base_url}${item?.backdrop_path}`} alt=""/>
        </div>
  )
}

export default Movie
