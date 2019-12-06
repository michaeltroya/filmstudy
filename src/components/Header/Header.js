import React from 'react';

import Logo from '../../images/logo.png';

import { Row, Col, Container } from 'react-bootstrap';

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col className="header-col" xs={12} md={6}>
            <img src={Logo} alt="logo" className="header-logo" />
          </Col>
          <Col className="header-col" xs={12} md={6}>
            <div className="how-to">
              <h5>How to</h5>
              <h6> 1. Select movies you've watched </h6>
              <h6> 2. Press the "Go" button </h6>
              <h6> 3. Check out what we've learned about your selections </h6>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
