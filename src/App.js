import React, { useEffect, useState } from 'react';
import KEY from './util/api';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
      .then(res => {
        console.log(res.data);
        setMovies(res.data.results);
      });
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <h3>{movie.title}</h3> <p>{movie.overview}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;
