import React from 'react';
import { Container } from 'react-bootstrap';
import Appbar from '../Appbar';
import Footer from '../Footer';

const BasicLayout = (props) => {
  return (
    <div className="layout">
      <Appbar />
      <Container className="container">
        {props.children}
      </Container>
      <Footer />
    </div>
  )
}

export default BasicLayout;
