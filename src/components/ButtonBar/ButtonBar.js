import React from 'react';

import { Button } from 'react-bootstrap';

const ButtonBar = ({ handleClear, handleLoadMore, handleGo, selectedMoviesIsEmpty }) => {
  return (
    <div className="button-bar">
      {selectedMoviesIsEmpty ? null : (
        <Button variant="outline-warning" onClick={handleGo}>
          Go
        </Button>
      )}
      <Button onClick={handleLoadMore} variant="outline-light">
        Load More Movies
      </Button>
      {selectedMoviesIsEmpty ? null : (
        <Button variant="outline-danger" onClick={handleClear}>
          Clear
        </Button>
      )}
    </div>
  );
};

export default ButtonBar;
