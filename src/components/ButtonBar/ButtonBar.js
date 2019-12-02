import React from 'react';

import { Button } from 'react-bootstrap';

const ButtonBar = ({ handleClear, handleLoadMore, handleGo, selectedMoviesIsEmpty }) => {
  return (
    <div className="button-bar">
      {selectedMoviesIsEmpty ? null : (
        <Button variant="success" onClick={handleGo}>
          GO
        </Button>
      )}
      <Button onClick={handleLoadMore}>LOAD MORE MOVIES</Button>
      {selectedMoviesIsEmpty ? null : (
        <Button variant="danger" onClick={handleClear}>
          CLEAR
        </Button>
      )}
    </div>
  );
};

export default ButtonBar;
