import React from 'react';
import { IMG_URL } from '../util/api';
import '../index.css';

function Movie({ movie, selectedMovies, setSelectedMovies }) {
  return (
    <div
      className={`movie-info ${selectedMovies.includes(movie.id) ? 'movie-selected' : 'null'}`}
      onClick={() => setSelectedMovies([...selectedMovies, movie.id])}
    >
      <img src={`${IMG_URL}${movie.poster_path}`} alt="poster" className="movie-img" />
      <h3>{movie.title}</h3>
    </div>
  );
}
export default Movie;
