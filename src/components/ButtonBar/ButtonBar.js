import React from 'react';
import '../../index.css';

const ButtonBar = ({ handleClear, handleLoadMore, handleGo, selectedMoviesIsEmpty }) => {
  return (
    <div className="button-bar">
      {selectedMoviesIsEmpty ? null : <button onClick={handleGo}>GO</button>}
      <button onClick={handleClear}>CLEAR</button>
      <button onClick={handleLoadMore}>LOAD MORE MOVIES</button>
    </div>
  );
};

export default ButtonBar;
