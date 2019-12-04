import React from 'react';
import { IMG_URL } from '../../../util/api';

import { Col, Card } from 'react-bootstrap';

const Movie = ({ movie, selectedMovies, setSelectedMovies }) => {
  const addOrRemoveSelected = () => {
    if (selectedMovies.includes(movie.id)) {
      setSelectedMovies(selectedMovies.filter(item => item !== movie.id));
    } else {
      setSelectedMovies([...selectedMovies, movie.id]);
    }
  };

  return (
    <Col xs={6} sm={4} md={3} lg={2} xl={2}>
      <Card className={`${selectedMovies.includes(movie.id) ? 'movie-selected' : 'movie'}`} onClick={addOrRemoveSelected}>
        <Card.Img variant="top" src={`${IMG_URL}${movie.poster_path}`} />
        <Card.Body className="d-flex justify-content-center">
          <Card.Title className="movie-title">{movie.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Movie;
