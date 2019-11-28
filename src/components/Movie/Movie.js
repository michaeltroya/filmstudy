import React from 'react';
import { IMG_URL } from '../../util/api';
import '../../index.css';

function Movie({ movie, selectedMovies, setSelectedMovies }) {
  const addOrRemoveSelected = () => {
    if (selectedMovies.includes(movie.id)) {
      setSelectedMovies(selectedMovies.filter(item => item !== movie.id));
    } else {
      setSelectedMovies([...selectedMovies, movie.id]);
      console.log(selectedMovies);
    }
  };

  return (
    <div className={`${selectedMovies.includes(movie.id) ? 'movie-info movie-selected' : 'movie-info'}`} onClick={addOrRemoveSelected}>
      <img src={`${IMG_URL}${movie.poster_path}`} alt="poster" className="movie-img" />
      <h5>{movie.title}</h5>
    </div>
  );
}
export default Movie;
