import React, {  useEffect } from "react";
import Card from "../components/Card"
import usefetch from "../hooks/usefetch";
import { useSearchParams } from "react-router-dom";

const search = ({api}) => {
  const [searchParams] = useSearchParams();
  const qureyTerm = searchParams.get("q");
  
  const { data: movies } = usefetch(api, qureyTerm);

    useEffect(() => {
      document.title = `${qureyTerm} / MovieMate`
    })

  return (
    <main className='max-w-7xl mx-auto py-7'>
      <section className=""> 
        <p className="text-3xl text-gray-700 dark:text-white p-4">{ movies.length === 0 ? ` No results found for "${qureyTerm}"` : `Results found for "${qureyTerm}"`}</p>
      </section>
      <section >
        <div className='flex justify-center flex-wrap'>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))} 
        </div>
    </section>
       </main>
  );
}

export default search
