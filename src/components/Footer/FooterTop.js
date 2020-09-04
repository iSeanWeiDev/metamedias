import React from 'react';
import { Row, Col, ListGroup, Image } from 'react-bootstrap';

function FooterTop() {
  return (
    <div className="footer-top">
      <Row>
        <Col xs={8}>
          <Row>
            <Col xs={6}>
              <Image src="/assets/imgs/logo-small-trans.gif" />
              <p>Child Care</p>
              <p>Solutions</p>
              <p>Beachwood, Ohio</p>
              <p>+1 (216)-223-8090</p>
            </Col>
            <Col xs={6}>

            </Col>
          </Row>
        </Col>
        <Col xs={2}>
          <span> What we are.</span>
          <ListGroup>
            <ListGroup.Item> Home </ListGroup.Item>
            <ListGroup.Item> News </ListGroup.Item>
            <ListGroup.Item> Services </ListGroup.Item>
            <ListGroup.Item> Contact us </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xs={2}>
          <span>How does it work.</span>
          <ListGroup>
            <ListGroup.Item> Costs </ListGroup.Item>
            <ListGroup.Item> Search </ListGroup.Item>
            <ListGroup.Item> Job Info </ListGroup.Item>
            <ListGroup.Item> Services </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
} 

export default FooterTop;
