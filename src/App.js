import React, { useEffect, useState, Fragment } from 'react';
import { KEY } from './util/api';

import axios from 'axios';

import MovieList from './components/MovieList/MovieList';
import ButtonBar from './components/ButtonBar/ButtonBar';

import { Container } from 'react-bootstrap';

import './index.css';

function App() {
  const [page, setPage] = useState(2);
  const [allMovies, setAllMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedMoviesDetails, setSelectedMoviesDetails] = useState({});

  useEffect(() => {
    let movieDiscoverList = [];
    for (let i = 1; i < page; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`
        )
        .then(res => {
          for (let x = 0; x < res.data.results.length; x++) {
            movieDiscoverList.push(res.data.results[x]);
            setAllMovies([...movieDiscoverList]);
          }
        });
    }
  }, [page]);

  const handleGo = () => {
    const revenues = [];
    const runtimes = [];
    const genres = [];
    const directors = [];

    selectedMovies.forEach(id => {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US&append_to_response=credits`).then(res => {
        revenues.push(res.data.revenue);
        runtimes.push(res.data.runtime);
        res.data.genres.forEach(genre => genres.push(genre.name));
        res.data.credits.crew.forEach(crew => {
          if (crew.job === 'Director') {
            directors.push(crew.name);
          }
        });
      });
    });

    setSelectedMoviesDetails({ revenues, runtimes, genres, directors });
  };

  const handleLoadMore = () => {
    setPage(page + 2);
  };

  const handleClear = () => {
    setSelectedMovies([]);
    setSelectedMoviesDetails({});
  };

  return (
    <Fragment>
      <ButtonBar handleClear={handleClear} handleLoadMore={handleLoadMore} handleGo={handleGo} />
      <button onClick={() => console.log(selectedMoviesDetails)}>SHOW DETAILS</button>
      <Container fluid>
        <MovieList allMovies={allMovies} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
      </Container>
    </Fragment>
  );
}

export default App;
