import React from 'react';
import { IMG_URL } from '../../util/api';

import { Col } from 'react-bootstrap';

import '../../index.css';

function Movie({ movie, selectedMovies, setSelectedMovies }) {
  const addOrRemoveSelected = () => {
    if (selectedMovies.includes(movie.id)) {
      setSelectedMovies(selectedMovies.filter(item => item !== movie.id));
    } else {
      setSelectedMovies([...selectedMovies, movie.id]);
    }
  };

  return (
    <Col xs={12} sm={3} md={2} className={`${selectedMovies.includes(movie.id) ? 'movie movie-selected' : 'movie'}`} onClick={addOrRemoveSelected}>
      <div className="movie-img-container d-flex justify-content-center flex-column">
        <img src={`${IMG_URL}${movie.poster_path}`} alt="poster" className="movie-img" />
        <h5>{movie.title}</h5>
      </div>
    </Col>
  );
}
export default Movie;
