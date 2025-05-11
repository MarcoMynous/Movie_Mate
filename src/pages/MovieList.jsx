import React, {  useEffect, useState } from "react";
import Card from "../components/Card"
import usefetch from "../hooks/usefetch";

const MovieList = ({api, title}) => {
  const { data: movies } = usefetch(api)

  useEffect(() => {
    document.title = `${title} / MovieMate`
  })
  return (
      <section className='max-w-7xl mx-auto py-7'>
         <div className='flex justify-start flex-wrap min-[340px]:max-[1227px]:justify-evenly'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))} 
          </div>
          </section>
  );
};

export default MovieList;
