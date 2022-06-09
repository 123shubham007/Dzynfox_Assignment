import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hero = () => {
  return (
    <section className="section position-relative">
      <Container>
        <Row className="center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="title">PGLife</p>
              <h1 className="heading"><span className="color">PGLife</span> Create token for booking hostel!</h1>
              <p className="paragraph">PGLife helps you register your hostel on our portal where other students can find and generate tokens for booking at your hostel.</p>
              <a href="#">
                <button class="learn-more">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">Find Out How</span>
                </button>
              </a>
              </div>
          </Col>
          <Col lg={6}>
            <div className="image">
              <img src="/images/Group Members.png" alt="" className="image-src" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;