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
    <Modal show={show} onHide={onHide} centered className="vert-modal-backdrop">
      <Modal.Header closeButton className="vert-modal-header">
        <Modal.Title as="h5">Based on the movies you've watched...</Modal.Title>
      </Modal.Header>
      <Modal.Body className="vert-modal-body">
        <Container className="vert-modal-container">
          <Row>
            <div className="info-container">
              <h4>Your movies have made... </h4>
              <h4>{totalRevenue}</h4>
            </div>
          </Row>

          <Row>
            <h3>You've spent... </h3>
          </Row>
          <Row>
            {totalRuntimeDays === '0' ? null : (
              <Col>
                <h3>{`${totalRuntimeDays} Day(s)`}</h3>
              </Col>
            )}
            <Col>{totalRuntimeHours ? <h2>{formatTime('Hour', totalRuntimeHours)}</h2> : null}</Col>
            <Col>{totalRuntimeMinutes ? <h2>{formatTime('Minute', totalRuntimeMinutes)}</h2> : null}</Col>
          </Row>
          <Row>
            <h3>Your Favourite... </h3>
          </Row>
          <Row>
            <Col>
              <ul>
                {favouriteDirectors === undefined || favouriteDirectors.length === 0
                  ? null
                  : favouriteDirectors.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </Col>
            <Col>
              <ul>
                {favouriteProducers === undefined || favouriteProducers.length === 0
                  ? null
                  : favouriteProducers.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </Col>
            <Col>
              <ul>
                {favouriteGenres === undefined || favouriteGenres.length === 0 ? null : favouriteGenres.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="vert-modal-footer">
        <Button variant="outline-dark" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default VertModal;
