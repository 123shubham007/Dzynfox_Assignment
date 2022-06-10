import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [
    { title : "Inlist", desc : "You can add more than one hostel/PG, Flat with us on our portal" },
    { title : "Delete", desc : "Remove your property at time from our portal" },
    { title : "Edit", desc : "You can easly edit your property" },
    { title : "View Token", desc : "You can view all the studens who have raised a token for you enlisted property and handle the token as you see fit." },
    { title : "Free of Cost", desc : "Their is no chargen on enlisting your property." },
    { title : "User Frendly", desc : "PGLife is use friendly hostel booking system" },
  ]
  
  return (
    <section className="section" id="service">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="weigth text"><span className="t-color">Services</span></h3>
              <p className="para-color">PGLife provide us with various services.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {
            services.map((service, key) =>
              <Col key={key} lg={4} md={6}>
                <div>
                  <div className="mb-5">
                      <i className={service.icon}></i>
                  </div>
                  <h5 className="text-dark weight m-top-bottom">{service.title}</h5>
                  <p className="text-gray m-top-bottom">{service.desc}</p>
                </div>
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  );
}

export default Service;