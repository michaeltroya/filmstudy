import React, { useEffect, useState } from 'react';
import { KEY, IMG_URL } from './util/api';
import axios from 'axios';

import './index.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  let movieDiscoverList = [];

  useEffect(() => {
    for (let i = 1; i < 3; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`
        )
        .then(res => {
          for (let x = 0; x < res.data.results.length; x++) {
            movieDiscoverList.push(res.data.results[x]);
            setMovies([...movieDiscoverList]);
          }
        });
    }
  }, []);

  const getDetailsFromIds = () => {
    let movieIds = [];
    let finalList = [];
    for (let i = 0; i < movies.length; i++) {
      movieIds.push(movies[i].id);
    }
    movieIds.forEach(id => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US&append_to_response=credits`).then(res => {
        finalList.push(res.data);
      });
    });
  };

  const handleClear = () => {
    setSelectedMovies([]);
  };

  return (
    <div>
      <button onClick={() => console.log(selectedMovies)}>SHOW SELECTED</button>

      <button onClick={handleClear}>CLEAR SELECTED</button>
      <div className="movies-container">
        {movies.map(movie => (
          <div
            key={movie.id}
            className={`movie-info ${selectedMovies.includes(movie.id) ? 'movie-selected' : 'null'}`}
            onClick={() => setSelectedMovies([...selectedMovies, movie.id])}
          >
            <img src={`${IMG_URL}${movie.poster_path}`} alt="poster" className="movie-img" />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
