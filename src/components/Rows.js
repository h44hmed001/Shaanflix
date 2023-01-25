import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

const Rows = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);
  const base_url="https://image.tmdb.org/t/p/w500/"
  return (
    <>
      <h2 className="text-[#e5e5e5] font-bold text-sm md:text-xl p-4 ">{title}</h2>
      <div className="items-center">
        <div id={'slider'} className="pl-4 w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide">
        {movies.map(movie=>(
            <Movie item={movie} key={movie.id}/>
        ))}
        </div>
        
        </div>
    </>
  );
};

export default Rows;
