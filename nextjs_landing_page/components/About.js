import React from 'react';
import { Container, Row, Col } from "reactstrap";


const About = () => {

  return (
    <section className="section bg-light" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center m-bottom">
              <h3 className="para-color">About <span className="t-color">Us</span></h3>
              <p className="text-gray">PGLife is a project developed to help students as well as owners, It helps  students can raise tokens on the interested flat and get to know if there are any flats near college </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className="para-color m-top-down"><img src="../images/logo.png" className="image-src"></img></h2>
          </Col>
          <Col md={{ size:7, offset :1 }}>
            <Row>
              <Col md={6}>
                <h6 className="para-color m-top-down">Our Mission</h6>
                <p className="weigth text-gray m-top-down">The owner who put their flat on rent does not hang a sign for to-let or put any advertisement so to put them in a spotlight and make the known between the students and students don't have to waste their energy on searching for flat here and there.</p>
              </Col>
              <Col md={6}>
                <h6 className="para-color m-top-down">Our Vision</h6>
                <p className="weigth text-gray m-top-down">Is to make our site known to the students so they can think about us when they need to book a flat.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;