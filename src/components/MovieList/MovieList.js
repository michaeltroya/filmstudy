import React from 'react';
import Movie from './Movie/Movie';

import { Row, Container } from 'react-bootstrap';

const MovieList = ({ allMovies, selectedMovies, setSelectedMovies }) => {
  return (
    <Container fluid>
      <div className="movies-container">
        <Row className="justify-content-center">
          {allMovies.map(movie => (
            <Movie movie={movie} key={movie.id} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MovieList;
