import React, { useState } from "react";
import "./CareerForm.css"; // Assuming you have your CSS file for styling
import image from "../../../assets/formImage.png";
import { Row, Col, Container } from "react-bootstrap";
import attachIcon from "../../../assets/CareerPage/attach-square.png";

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    workExperience: "",
    qualification: "",
    previousJobTitle: "",
    companyName: "",
    applyingFor: "",
    resume: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center container-section">
        <Col >
          <h6 className="form-heading">Fill up the form</h6>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                placeholder="Work Experience"
              />
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Qualification"
              />
            </div>
            <div className="form-row">
              <input
                type="text"
                name="previousJobTitle"
                value={formData.previousJobTitle}
                onChange={handleChange}
                placeholder="Previous Job Title"
              />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </div>

            <div className="custom-select form-row">
              <span className="placeholder">Applying For</span>
              <select
                name="applyingFor"
                value={formData.applyingFor}
                onChange={handleChange}
              >
                <option value="" disabled hidden></option>
                {/* Other options */}
              </select>
            </div>

            <div className="form-row file-input">
              <span className="placeholder">
                Attach Resume and Cover Letter
              </span>
              <input
                type="file"
                name="resume"
                className="file"
                onChange={handleChange}
              />
              <span className="file-icon">
                <img src={attachIcon} />
              </span>
            </div>
            <button type="submit" className="career-submit-btn">
              Submit
            </button>
          </form>
        </Col>

        <Col className="image-section" sm={12} >
          <img src={image} alt="Form Image" />
        </Col>
      </Row>
    </Container>
  );
};

export default CareerForm;
