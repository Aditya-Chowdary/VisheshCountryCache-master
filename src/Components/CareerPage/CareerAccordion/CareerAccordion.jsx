import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import "./CareerAccordion.css";

function CareerAccordion() {
  return (
    <div style={{ marginTop: "5%", margin: "2%" }}>
      <h4 className="bigText">Our Openings </h4>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="accord-heading">
            Graphic Designer
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordion-heading">Description:</p>
            <p className="accordion-para">
              We are seeking a talented and experienced Graphic Designer to join
              our creative team. The ideal candidate will have a minimum of 2
              years of professional design experience and a strong portfolio
              showcasing their work. You will play a crucial role in creating
              visually appealing and engaging designs that align with our brand
              and marketing objectives.
            </p>
            <p className="accordion-heading">Responsibilities:</p>
            <ol className="accordion-para">
              <li>
                Collaborate with the creative team to design marketing
                materials, including print and digital assets.
              </li>
              <li>
                Interpret creative briefs to create engaging designs aligned
                with our brand.
              </li>
              <li>
                Use design software to craft graphics, illustrations, and
                layouts.
              </li>
              <li>Ensure consistent adherence to brand guidelines.</li>
              <li>Stay updated on design trends and best practices.</li>
              <li>Manage multiple design projects, meeting deadlines.</li>
              <li>
                Collaborate with team members to deliver cohesive design
                solutions.
              </li>
            </ol>
            <p className="accordion-heading">Requirements:</p>
            <ol className="accordion-para">
              <li>
                Minimum 2 years of professional graphic design experience.
              </li>
              <li>Proficiency in Adobe Creative Suite.</li>
              <li>Strong portfolio demonstrating diverse design projects.</li>
              <li>
                Knowledge of design principles, typography, and color theory.
              </li>
              <li>Ability to work in a collaborative team environment.</li>
              <li>Detail-oriented with a commitment to high-quality work.</li>
              <p
                className="accordion-para"
                style={{ marginTop: "2%", marginLeft: "-2%" }}
              >
                If you are a creative, detail-oriented, and experienced Graphic
                Designer who can bring fresh ideas to the table, we would love
                to hear from you. Please submit your resume, portfolio, and a
                cover letter outlining your relevant experience and why you are
                the ideal candidate for this position.
              </p>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="accord-heading">
            UI/UX Designer
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordion-heading">Description:</p>
            <p className="accordion-para">
              We are seeking a talented and experienced Graphic Designer to join
              our creative team. The ideal candidate will have a minimum of 2
              years of professional design experience and a strong portfolio
              showcasing their work. You will play a crucial role in creating
              visually appealing and engaging designs that align with our brand
              and marketing objectives.
            </p>
            <p className="accordion-heading">Responsibilities:</p>
            <ol className="accordion-para">
              <li>
                Collaborate with the creative team to design marketing
                materials, including print and digital assets.
              </li>
              <li>
                Interpret creative briefs to create engaging designs aligned
                with our brand.
              </li>
              <li>
                Use design software to craft graphics, illustrations, and
                layouts.
              </li>
              <li>Ensure consistent adherence to brand guidelines.</li>
              <li>Stay updated on design trends and best practices.</li>
              <li>Manage multiple design projects, meeting deadlines.</li>
              <li>
                Collaborate with team members to deliver cohesive design
                solutions.
              </li>
            </ol>
            <p className="accordion-heading">Requirements:</p>
            <ol className="accordion-para">
              <li>
                Minimum 2 years of professional graphic design experience.
              </li>
              <li>Proficiency in Adobe Creative Suite.</li>
              <li>Strong portfolio demonstrating diverse design projects.</li>
              <li>
                Knowledge of design principles, typography, and color theory.
              </li>
              <li>Ability to work in a collaborative team environment.</li>
              <li>Detail-oriented with a commitment to high-quality work.</li>
              <p
                className="accordion-para"
                style={{ marginTop: "2%", marginLeft: "-2%" }}
              >
                If you are a creative, detail-oriented, and experienced Graphic
                Designer who can bring fresh ideas to the table, we would love
                to hear from you. Please submit your resume, portfolio, and a
                cover letter outlining your relevant experience and why you are
                the ideal candidate for this position.
              </p>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="accord-heading">
            Full Stack Developer
          </Accordion.Header>
          <Accordion.Body>
            <p className="accordion-heading">Description:</p>
            <p className="accordion-para">
              We are seeking a talented and experienced Graphic Designer to join
              our creative team. The ideal candidate will have a minimum of 2
              years of professional design experience and a strong portfolio
              showcasing their work. You will play a crucial role in creating
              visually appealing and engaging designs that align with our brand
              and marketing objectives.
            </p>
            <p className="accordion-heading">Responsibilities:</p>
            <ol className="accordion-para">
              <li>
                Collaborate with the creative team to design marketing
                materials, including print and digital assets.
              </li>
              <li>
                Interpret creative briefs to create engaging designs aligned
                with our brand.
              </li>
              <li>
                Use design software to craft graphics, illustrations, and
                layouts.
              </li>
              <li>Ensure consistent adherence to brand guidelines.</li>
              <li>Stay updated on design trends and best practices.</li>
              <li>Manage multiple design projects, meeting deadlines.</li>
              <li>
                Collaborate with team members to deliver cohesive design
                solutions.
              </li>
            </ol>
            <p className="accordion-heading">Requirements:</p>
            <ol className="accordion-para">
              <li>
                Minimum 2 years of professional graphic design experience.
              </li>
              <li>Proficiency in Adobe Creative Suite.</li>
              <li>Strong portfolio demonstrating diverse design projects.</li>
              <li>
                Knowledge of design principles, typography, and color theory.
              </li>
              <li>Ability to work in a collaborative team environment.</li>
              <li>Detail-oriented with a commitment to high-quality work.</li>
              <p
                className="accordion-para"
                style={{ marginTop: "2%", marginLeft: "-2%" }}
              >
                If you are a creative, detail-oriented, and experienced Graphic
                Designer who can bring fresh ideas to the table, we would love
                to hear from you. Please submit your resume, portfolio, and a
                cover letter outlining your relevant experience and why you are
                the ideal candidate for this position.
              </p>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CareerAccordion;
