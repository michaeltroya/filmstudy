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
                  <h6>Revenue</h6>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className="result-container">
                <h5>Your Total Watch Time:</h5>
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

                    {totalRuntimeMinutes === 0 ? null : (
                      <Col className="runtime-col">
                        {totalRuntimeMinutes ? (
                          <Fragment>
                            <h4>{totalRuntimeMinutes}</h4>
                            <h6>{singleOrPlural('Minute', totalRuntimeMinutes)}</h6>
                          </Fragment>
                        ) : null}
                      </Col>
                    )}
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className="result-container">
                <h5>Your Favourite:</h5>
                <Row>
                  <Col xs={12}>
                    <ul className="result-box list-box">
                      {favouriteGenres === undefined ? null : favouriteGenres.length === 1 ? <h6>Genre</h6> : <h6>Genres</h6>}
                      {favouriteGenres === undefined || favouriteGenres.length === 0
                        ? null
                        : favouriteGenres.map((item, i) => (
                            <li key={i}>
                              <h5>{item}</h5>
                            </li>
                          ))}
                    </ul>
                  </Col>
                  <Col xs={12}>
                    <ul className="result-box list-box">
                      {favouriteDirectors === undefined ? null : favouriteDirectors.length === 1 ? <h6>Director</h6> : <h6>Directors</h6>}
                      {favouriteDirectors === undefined || favouriteDirectors.length === 0
                        ? null
                        : favouriteDirectors.map((item, i) => (
                            <li key={i}>
                              <h5>{item}</h5>
                            </li>
                          ))}
                    </ul>
                  </Col>
                  <Col xs={12}>
                    <ul className="result-box list-box">
                      {favouriteProducers === undefined ? null : favouriteProducers.length === 1 ? <h6>Producer</h6> : <h6>Producers</h6>}
                      {favouriteProducers === undefined || favouriteProducers.length === 0
                        ? null
                        : favouriteProducers.map((item, i) => (
                            <li key={i}>
                              <h5>{item}</h5>
                            </li>
                          ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="vert-modal-footer">
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default VertModal;
