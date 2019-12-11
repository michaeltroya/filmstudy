import React from 'react';

import Logo from '../../images/logo.png';

import { Row, Col, Container, Popover, OverlayTrigger } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const popover = (
    <Popover id="popover-basic" className="instructions">
      <Popover.Title as="h3">How to</Popover.Title>
      <Popover.Content>
        <p> 1. Select movies you've watched </p>
        <p> 2. Press the "Go" button </p>
        <p> 3. Check out what we've learned about your selections </p>
      </Popover.Content>
    </Popover>
  );

  return (
    <header className="header">
      <Container>
        <Row>
          <Col className="header-col" xs={12} md={12}>
            <img src={Logo} alt="logo" className="header-logo" />
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <FontAwesomeIcon icon={faQuestionCircle} className="how-to" />
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
