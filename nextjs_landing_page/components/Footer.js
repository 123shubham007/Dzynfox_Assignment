import React from 'react';
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  const links = [
    { id : 1, title : "Feature",
      child : [
          { title : "Rgister Your Hostel", link : "/" },
          { title : "Display Hostel Facilities", link : "/" },
          { title : "Get Booking", link : "/" },
          { title : "Feature", link : "/" }
      ]
    },
    { id : 2, title : "About Us",
      child : [
          { title : "Contact Us", link : "/" },
          { title : "FAQs", link : "/" },
          { title : "Privacy Policy", link : "/" },
      ]
    },
  ];
  
  return (
    <section className="footer section">
      <Container>
        <Row>
          <Col lg={4}>
              <div className="m-top-bottom">
                <p className="m-top text">shubhamkumar.123.sk001@email.com</p>
                <h6 className="text weigth">+91 7979816961</h6>
              </div>
          </Col>
          <Col lg={8}>
            <Row>
              {
                links.map((link, key) =>
                  <Col key={key} md={4}>
                    <h6 className="text m-top-bottom">{link.title}</h6>
                    <ul className="list-unstyled company-sub-menu">
                      {
                        link.child.map((fLink, key) =>
                          <li key={key}><a href={fLink.link}>{fLink.title}</a></li>
                        )
                      }
                    </ul>
                  </Col>
                )
              }
              
              <Col md={4}>
                <h6 className="text m-top-bottom">Our Address</h6>
                <p className="text">xyz</p>
                <h6 className="text m-bottom">Email: shubhamkumar.123.sk001@email.com</h6>
                <div classNam="icons-wrapper">
                  <i className="ri-instagram-line icon"></i>
                  <i className="ri-facebook-circle-line icon"></i>
                  <i className="ri-whatsapp-line icon"></i>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="m-top">
          <Col md={12}>
            <div className="text-center text">
              <p className="m-top-0">S.K</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;