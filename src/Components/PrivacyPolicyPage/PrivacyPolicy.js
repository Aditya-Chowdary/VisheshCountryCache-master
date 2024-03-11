import React from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <>
      <div style={{ marginTop: "5%" }}>
        <h4 className="PrivacyPage-Header-Name ">Privacy Policy</h4>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading">Introduction</p>
        <p className="privacy-subText">
          Vishesh Country Cache ("we," "us," or "our") values your privacy and
          is committed to protecting your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your data when you
          use our website and services.
        </p>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading">Information We Collect</p>
        <p className="privacy-subHeading2">Personal Information</p>
        <p className="privacy-subText">
          We may collect personal information, including but not limited to:
        </p>
        <ul className="privacy-subText">
          <li>Name</li>
          <li> Email address</li>
          <li> Contact information</li>
          <li>Company details</li>
          <li> User preferences</li>
        </ul>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Non-personal Information</p>
        <p className="privacy-subText">
          We also collect non-personal information, such as:
        </p>
        <ul className="privacy-subText">
          <li>Browser type</li>
          <li> Device information</li>
          <li>IP address</li>
          <li> Cookies and usage data</li>
        </ul>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">How We Use Your Information</p>
        <p className="privacy-subText">
          We use the collected information for the following purposes:
        </p>
        <ul className="privacy-subText">
          <li>To provide and maintain our services</li>
          <li> To improve our website and services</li>
          <li> To communicate with you</li>
          <li> To personalize your experience</li>
          <li> To comply with legal obligations</li>
        </ul>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Data Security</p>
        <p className="privacy-subText">
          We prioritize the security of your data and implement
          industry-standard measures to protect against unauthorized access,
          disclosure, or alteration.
        </p>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Cookies</p>
        <p className="privacy-subText">
          We use cookies to enhance your experience on our website. You can
          manage your cookie preferences through your browser settings.
        </p>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Third-party Links</p>
        <p className="privacy-subText">
          Our website may contain links to third-party sites. We are not
          responsible for the privacy practices of these sites. We recommend
          reviewing their privacy policies.
        </p>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading2">Your Choices</p>
        <p className="privacy-subText">You have the right to:</p>
        <ul className="privacy-subText">
          <li>Access, correct, or delete your personal information</li>
          <li> Opt-out of marketing communications</li>
          <li> Disable cookies</li>
        </ul>
      </div>
      <div className="privacy-container">
        <p className="privacy-subHeading">Changes to this Privacy Policy</p>
        <p className="privacy-subText">
          We may update our Privacy Policy to reflect changes in our practices.
          We encourage you to review this page periodically for the latest
          information.
        </p>
      </div>
      <div className="privacy-container" style={{ marginBottom: "15%" }}>
        <p className="privacy-subHeading">Contact Us</p>
        <p className="privacy-subText">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{" "}
          <span className="privacy-email">hello@visheshcountrycache.com</span>
        </p>
      </div>
    </>
  );
}

export default PrivacyPolicy;
