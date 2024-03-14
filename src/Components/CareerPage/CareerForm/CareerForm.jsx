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

  const [selectedFileName, setSelectedFileName] = useState(""); // State to store the selected file name

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume" && files.length > 0) {
      // If the input is a file input and a file is selected
      setFormData({ ...formData, [name]: files[0] }); // Update the form data with the selected file
      setSelectedFileName(files[0].name); // Set the selected file name
    } else {
      setFormData({ ...formData, [name]: value }); // Update the form data for other inputs
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col>
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
              {/* Remove placeholder from select when an option is selected */}
              <span className="select-placeholder">
                {formData.applyingFor ? formData.applyingFor : "Applying For"}
              </span>
              <select
                name="applyingFor"
                value={formData.applyingFor}
                onChange={handleSelectChange}
              >
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="UI/UX Designer">UI/UX Designer</option>
                <option value="Fullstack Development">
                  Fullstack Development
                </option>
              </select>
            </div>

            <div className="form-row file-input">
              {/* Remove placeholder from file input and select when a value is selected */}
              <span className="file-placeholder">
                {selectedFileName
                  ? selectedFileName
                  : "Attach Resume and Cover Letter"}
              </span>
              <span className="file-icon">
                <img src={attachIcon} alt="Attachment Icon" />
              </span>
              <input
                type="file"
                name="resume"
                className="file"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="career-submit-btn">
              Submit
            </button>
          </form>
        </Col>

        <Col className="image-section">
          <img src={image} alt="Form" className="form-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default CareerForm;
