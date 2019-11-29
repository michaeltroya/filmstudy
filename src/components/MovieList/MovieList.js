import React from 'react';
import Movie from '../Movie/Movie';

import { Row } from 'react-bootstrap';

import '../../index.css';

const MovieList = ({ allMovies, selectedMovies, setSelectedMovies }) => {
  return (
    <div className="movies-container">
      <Row className="justify-content-center">
        {allMovies.map(movie => (
          <Movie movie={movie} key={movie.id} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
        ))}
      </Row>
    </div>
  );
};

export default MovieList;
