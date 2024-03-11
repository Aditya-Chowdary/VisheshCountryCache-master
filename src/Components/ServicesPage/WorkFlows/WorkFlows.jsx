import React from "react";
import "./WorkFlows.css";
import { Container } from "react-bootstrap";

export default function WorkFlows() {
  return (
    <Container fluid className="accordion-Container">

      <section className="accordion">

        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4 className="accordion-flex-h4">Discover</h4>
            </div>
            <div>
              <h4 className="accordion-flex-h4">01</h4>
            </div>
          </div>

          <div className="accordion-item-content">
            <p style={{ backgroundColor: '#1D2939', color: "white", paddingLeft: "5%", paddingRight: "5%" }} className=" home-project-text" >We'll work to understand your goals, strategy, and mission to develop a strategy for success.</p>
          </div>
        </section>
        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4 className="accordion-flex-h4">Design</h4>
            </div>
            <div>
              <h4 className="accordion-flex-h4">02</h4>
            </div>
          </div>

          <div className="accordion-item-content">
            <p style={{ backgroundColor: '#1D2939', color: "white", paddingLeft: "5%", paddingRight: "5%" }} className="home-project-text" >Our team will create an intuitive user experience that will bring your product to life.</p>
          </div>
        </section>
        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4 className="accordion-flex-h4">Develop</h4>
            </div>
            <div>
              <h4 className="accordion-flex-h4">03</h4>
            </div>
          </div>

          <div className="accordion-item-content">
            <p style={{ backgroundColor: '#1D2939', color: "white", paddingLeft: "5%", paddingRight: "5%" }} className="home-project-text">We work in agile sprints to ensure you're always up to speed with the status of your project.</p>
          </div>
        </section>
        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4 className="accordion-flex-h4">Deliver</h4>
            </div>
            <div>
              <h4 className="accordion-flex-h4">04</h4>
            </div>
          </div>

          <div className="accordion-item-content">
            <p style={{ backgroundColor: '#1D2939', color: "white", paddingLeft: "5%", paddingRight: "5%" }} className="home-project-text">We efficiently hand over project results to intended recipients, ensuring stakeholder satisfaction.</p>
          </div>
        </section>
        <section className="accordion-item">
          <div className="accordion-flex">
            <div>
              <h4 className="accordion-flex-h4">Support</h4>
            </div>
            <div>
              <h4 className="accordion-flex-h4">05</h4>
            </div>
          </div>

          <div className="accordion-item-content">
            <p style={{ backgroundColor: '#1D2939', paddingBottom: "20px", color: "white", paddingLeft: "5%", paddingRight: "5%" }} className="home-project-text">Our team will work diligently to maintain the optimal performance and current status of your core IT assets through support.</p>
          </div>
        </section>
      </section>
    </Container>
  );
}
