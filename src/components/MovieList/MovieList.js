import React from 'react';
import Movie from '../Movie/Movie';

import '../../index.css';

function MovieList({ allMovies, selectedMovies, setSelectedMovies }) {
  return (
    <div className="movies-container">
      {allMovies.map(movie => (
        <Movie movie={movie} key={movie.id} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
      ))}
    </div>
  );
}

export default MovieList;
