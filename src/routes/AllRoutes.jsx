import { Route, Routes } from "react-router-dom";
import { Search, MovieDetail, MovieList, PageNotFound } from '../pages';
import React from 'react'

const AllRoutes = () => {
  return (
    <div className="dark:bg-gray-800">
        <Routes>
            <Route path="/"  element={<MovieList api="movie/now_playing" title="Home"/>}/>
            <Route path="movie/:id" element={<MovieDetail/>}/>
            <Route path="movies/popular" element={<MovieList api="movie/popular" title="Popular"/>}/>
            <Route path="movies/top_rated" element={<MovieList api="movie/top_rated" title="Top-rated"/>}/>
            <Route path="movies/upcoming" element={<MovieList api="movie/upcoming" title="Upcoming"/>}/>
            <Route path="search" element={<Search api="search/movie"/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
