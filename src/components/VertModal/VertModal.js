import React, { Fragment } from 'react';

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
    if (number === 1) {
      return `${word}`;
    } else {
      return `${word}s`;
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered className="vert-modal-backdrop">
      <Modal.Header closeButton className="vert-modal-header">
        <Modal.Title className="vert-modal-title">Based on your selections...</Modal.Title>
      </Modal.Header>
      <Modal.Body className="vert-modal-body">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="result-container">
                <h5>Your movies generated:</h5>
                <div className="result-box revenue-box">
                  <h4 className="m-0">{totalRevenue}</h4>
                </div>
              </div>
            </Col>
            <Col>
              <div className="result-container">
                <h5>You've Spent:</h5>
                <div className="result-box runtime-box">
                  <Row>
                    {totalRuntimeDays === 0 ? null : (
                      <Col className="runtime-col">
                        <h4>{totalRuntimeDays}</h4>
                        <h6>{singleOrPlural('Day', totalRuntimeDays)}</h6>
                      </Col>
                    )}

                    <Col className="runtime-col">
                      {totalRuntimeHours ? (
                        <Fragment>
                          <h4>{totalRuntimeHours}</h4>
                          <h6>{singleOrPlural('Hour', totalRuntimeHours)}</h6>
                        </Fragment>
                      ) : null}
                    </Col>
                    <Col className="runtime-col">
                      {totalRuntimeMinutes ? (
                        <Fragment>
                          <h4>{totalRuntimeMinutes}</h4>
                          <h6>{singleOrPlural('Minute', totalRuntimeMinutes)}</h6>
                        </Fragment>
                      ) : null}
                    </Col>
                  </Row>
                </div>
              </div>
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
