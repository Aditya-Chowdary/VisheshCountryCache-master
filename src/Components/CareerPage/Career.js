import React from "react";
import "./Career.css";
import { Row, Col, Image } from "react-bootstrap";
import CareerAccordion from "./CareerAccordion/CareerAccordion";
import CareerForm from "./CareerForm/CareerForm";
import icon1 from "../../assets/CareerPage/profile-2user.png";
import icon2 from "../../assets/CareerPage/trend-up.png";
import icon3 from "../../assets/CareerPage/blur.png";
import icon4 from "../../assets/CareerPage/shapes.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Career() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed of transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   
    vertical: true, // Set to true for vertical scrolling
  };

  return (
    <div>
      <div className="career_banner"></div>
      <div className="div-margins">
        <Row>
          <Col md={6}>
            <p className="smallText">
              A great place to{" "}
              <Slider {...settings} className="slider_style">
                <div>
                  <span>Work</span>
                </div>
                <div>
                  <span>Design</span>
                </div>
                <div>
                  <span>Develop</span>
                </div>
                <div>
                  <span>be</span>
                </div>
              </Slider>
            </p>
            <h5 className="mediumText">
              If our values resonate with you as well, then we ought to be
              together.
            </h5>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6} md={6}>
                <p className="smallText" style={{ textAlign: "center" }}>
                  <Image src={icon1} className="icons"/>
                  <br />
                  Collaborative
                  <br />
                  Excellence
                </p>
              </Col>
              <Col xs={6} md={6}>
                <p className="smallText" style={{ textAlign: "center" }}>
                  <Image src={icon2}  className="icons"/>
                  <br />
                  Continuous Growth <br />
                  and Learning
                </p>
              </Col>
            </Row>
            <Row style={{ paddingTop: "5vw" }}>
              <Col xs={6} md={6}>
                <p className="smallText" style={{ textAlign: "center" }}>
                  <Image src={icon3}  className="icons"/>
                  <br />
                  Innovation and <br />
                  Creativity
                </p>
              </Col>
              <Col xs={6} md={6}>
                <p className="smallText" style={{ textAlign: "center" }}>
                  <Image src={icon4}  className="icons"/>
                  <br />
                  Diversity and <br />
                  Inclusion
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="div-margins">
        <h4 className="bigText">What You’ll Get</h4>
        <Row style={{ marginTop: "2%", padding: "10px" }}>
          <Col>
            <h6 className="normalText">Inspirational and Unique Environment</h6>
          </Col>
          <Col md={5}>
            <p className="smallText" style={{ maxWidth: "754px" }}>
              We offer you the chance to thrive in an inspiring setting where
              your creative thinking and innovation will be valued.
            </p>
          </Col>
          <hr />
        </Row>
        <Row style={{ padding: "10px" }}>
          <Col>
            <h6 className="normalText">Professional Development</h6>
          </Col>
          <Col md={5}>
            <p className="smallText" style={{ maxWidth: "754px" }}>
              You'll unlock your potential in unique projects. Our priority:
              your growth, learning, and career.
            </p>
          </Col>
          <hr />
        </Row>
        <Row style={{ padding: "10px" }}>
          <Col>
            <h6 className="normalText">Friendly Team</h6>
          </Col>
          <Col md={5}>
            <p className="smallText" style={{ maxWidth: "754px" }}>
              Join our close-knit, friendly team where every contribution
              matters. Together, we accomplish and celebrate significant success
              with joy.
            </p>
          </Col>
          <hr />
        </Row>
        <Row style={{ padding: "10px" }}>
          <Col>
            <h6 className="normalText">Library with Tech Books</h6>
          </Col>
          <Col md={5}>
            <p className="smallText" style={{ maxWidth: "754px" }}>
              We boasts a comprehensive library stocked with an array of
              valuable technical books.
            </p>
          </Col>
          <hr />
        </Row>
        <Row style={{ padding: "10px" }}>
          <Col>
            <h6 className="normalText">Training</h6>
          </Col>
          <Col md={5}>
            <p className="smallText" style={{ maxWidth: "754px" }}>
              Our training programs empower your growth with expert guidance and
              tailored learning experiences.
            </p>
          </Col>
          <hr />
        </Row>
        <Row style={{ padding: "10px" }}>
          <Col>
            <h6 className="normalText">Indoor/Outdoor Games</h6>
          </Col>
          <Col md={5}>
            <p className="smallText" style={{ maxWidth: "754px" }}>
              Diverse indoor games provide a stress-relief escape from work,
              enhancing relaxation and enjoyment.
            </p>
          </Col>
          <hr />
        </Row>
      </div>
      <div style={{ marginTop: "10%" }}>
        <CareerAccordion />
      </div>
      <div style={{ marginTop: "8%", marginLeft: "2%", marginBottom: "10%" }}>
        <CareerForm />
      </div>
    </div>
  );
}

export default Career;
