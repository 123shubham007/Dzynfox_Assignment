import React from 'react';
import { Container, Row, Col } from "reactstrap";

const FeatureBox = (props) => {
  return (
    <>
    {
      props.features.map((feature, key) =>
      (feature.id % 2 !== 0) ?
        <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
          <Col md={5} >
            <div>
              <img src={feature.img} alt="" className="image-src"/>
            </div>
          </Col>
            <Col md={{size:6, offset:1}}>
              <div className="note">
                <h5 className="text weight m-top-bottom">{feature.title}</h5>
                <p className="para-color m-top-bottom">{feature.desc}</p>
                <a href={feature.link} className="f-16 t-color btn">Read More <span className="right-icon">&#8594;</span></a>
              </div>
            </Col>
        </Row>
      :
      <Row key={key} className="align-items-center mt-5">
        <Col md={6}>
          <div className="mb-4">
            <h5 className="text weight m-top-bottom">{feature.title}</h5>
            <p className="para-color m-top-bottom">{feature.desc}</p>
            <a href={feature.link} className="f-16 t-color btn">Read More <span className="right-icon ml-2">&#8594;</span></a>
          </div>
        </Col>
        <Col md={{size:5, offset:1}} className="m-top-bottom">
          <div>
            <img src={feature.img} alt="" className="image-src"/>
          </div>
        </Col>
      </Row>
      )
    }
    </>
  );
}

const Feature = () => {

  const features = [
    {id : 1, img : "./images/45.png", title : "REGISTER YOUR HOSTEL!", desc : "By connecting with us you can register your hostel/PG, Flat, or any types of property which you want to put on rent with just a few clicks.", link : "/"},
    {id : 2, img : "./images/Group Members.png", title : "SHOW YOUR FEATURES", desc : "You can show your hostel facilities so that student can compare your facilities with others", link : "/"},
    {id : 3, img : "./images/45.png", title : "FEATURE", desc : "Any other feature related to teh project.", link : "/"},
  ];

  return (
    <section className="section" id="feature">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <h3 className="weight text"><span className="t-color">Features</span></h3>
              <p className="para-color">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </Col>
        </Row>
        <FeatureBox features={features} />
      </Container>
    </section>
  );
}

export default Feature;
