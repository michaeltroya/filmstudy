import React from 'react';
import '../../index.css';

function ButtonBar({ handleClear, handleLoadMore, handleGo }) {
  return (
    <div className="button-bar">
      <button onClick={handleGo}>GO</button>
      <button onClick={handleClear}>CLEAR</button>
      <button onClick={handleLoadMore}>LOAD MORE MOVIES</button>
    </div>
  );
}

export default ButtonBar;
