import React from 'react';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';
import { Container } from "react-bootstrap";
import '../../styles/components/footer.scss';

function FooterContainer() {
  return (
    <div className="footer">
      <Container >
        <FooterTop />
        <FooterBottom />
      </Container>
    </div>
  )
}

export default FooterContainer;