import React from 'react';

import { Modal, Button } from 'react-bootstrap';

const VertModal = ({ show, onHide, movieCalculations: { totalRevenue, totalRuntime, favouriteGenres, favouriteDirectors, favouriteProducers } }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{totalRuntime}</h2>
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
