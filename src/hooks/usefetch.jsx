import React, { useState, useEffect } from 'react'

const usefetch = (api, qureyTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${api}?query=${qureyTerm}&language=en-US&page=1`
    
    useEffect(() => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTE5NWU2NjQ2YzgzMTI5YzQzM2M5MTIzMGU4ZTVkMCIsIm5iZiI6MTc0MTQ3MTQ2OC40NzksInN1YiI6IjY3Y2NiZWVjZjIzZTk5NDAxMDViYzdjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j1sr0YEWrXVlWUfcnYJUPVIfWvwHDS0sS45Yzo9-74I'
          }
        };
        
        fetch(url, options)
          .then(res => res.json())
          .then((data) => setData(data.results || []))
          .catch(err => console.error(err));
      }, [url]); 
  return {data }
}

export default usefetch
