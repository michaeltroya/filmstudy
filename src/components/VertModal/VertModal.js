import React from 'react';

import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

const VertModal = ({
  show,
  onHide,
  movieCalculations: {
    totalRevenue,
    totalRuntimeMinutes,
    totalRuntimeHours,
    totalRuntimeDays,
    favouriteGenres,
    favouriteDirectors,
    favouriteProducers
  }
}) => {
  const singleOrPlural = (word, number) => {
    if (number.split('')[1] === '1') {
      return `${word}`;
    } else {
      return `${word}s`;
    }
  };

  const formatTime = (word, number) => {
    let finalString;

    if (number.split('')[0] === '0') {
      finalString = `${number.split('')[1]} ${singleOrPlural(word, number)}`;
    } else {
      finalString = `${number} ${singleOrPlural(word, number)}`;
    }

    return finalString;
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Results</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>Based on your selections you've watched...</h2>

        {totalRuntimeDays === '0' ? null : <h2>{`${totalRuntimeDays} Day(s)`}</h2>}
        {totalRuntimeHours ? <h2>{formatTime('Hour', totalRuntimeHours)}</h2> : null}
        {totalRuntimeMinutes ? <h2>{formatTime('Minute', totalRuntimeMinutes)}</h2> : null}

        <h2>{totalRevenue}</h2>

        <ul>
          {favouriteDirectors === undefined || favouriteDirectors.length === 0 ? null : favouriteDirectors.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <ul>
          {favouriteProducers === undefined || favouriteProducers.length === 0 ? null : favouriteProducers.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <ul>{favouriteGenres === undefined || favouriteGenres.length === 0 ? null : favouriteGenres.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default VertModal;
