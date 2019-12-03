import React from 'react';

import { Modal, Button } from 'react-bootstrap';

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
  const hasZeros = number => {
    if (number.split('')[0] === '0') {
      return true;
    } else {
      return false;
    }
  };

  const singleOrPlural = (word, number) => {
    if (number.split('')[1] === '1') {
      return `${word}`;
    } else {
      return `${word}s`;
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Your Results</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>You've Watched...</h2>

        <h2>{totalRuntimeDays === '0' ? null : `${totalRuntimeDays} Day(s)`}</h2>
        {totalRuntimeHours ? (
          hasZeros(totalRuntimeHours) ? (
            <h2>{`${totalRuntimeHours.split('')[1]} ${singleOrPlural('Hour', totalRuntimeHours)}`}</h2>
          ) : (
            <h2>{`${totalRuntimeHours} ${singleOrPlural('Hour', totalRuntimeHours)}`}</h2>
          )
        ) : null}
        {totalRuntimeMinutes ? (
          hasZeros(totalRuntimeMinutes) ? (
            <h2>{`${totalRuntimeMinutes.split('')[1]} ${singleOrPlural('Minute', totalRuntimeMinutes)}`}</h2>
          ) : (
            <h2>{`${totalRuntimeMinutes} ${singleOrPlural('Minute', totalRuntimeMinutes)}`}</h2>
          )
        ) : null}

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
