import React from 'react';
import "./UIUXTools.css"
import image1 from "../../../../../assets/ServicePage/Figma.png"
import image2 from "../../../../../assets/ServicePage/Adobe XD.png"
import image3 from "../../../../../assets/ServicePage/Miro.png"
import image4 from "../../../../../assets/ServicePage/Notion.png"
import { Container, Image, Row } from 'react-bootstrap';


function UIUXTools(props) {
    return (
        <Container fluid className='UIUXTools-Container'>
            <Row className='UIUXTools-row'>
                <div className='UIUXTools-image'>
                    <Image src={image1} alt='creative' style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='footer-section-text2' style={{ color: "var(--text-icon-light-body, #33353A)", }}>Figma</div>
                </div>
                <div className='UIUXTools-image'>
                    <Image src={image2} alt='creative' style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='footer-section-text2' style={{ color: "var(--text-icon-light-body, #33353A)", }}>Adobe XD</div>
                </div>
                <div className='UIUXTools-image'>
                    <Image src={image3} alt='creative' style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='footer-section-text2' style={{ color: "var(--text-icon-light-body, #33353A)", }}>Miro</div>
                </div>
                <div className='UIUXTools-image'>
                    <Image src={image4} alt='creative' style={{ maxWidth: '90%', height: 'auto' }} />
                    <div className='footer-section-text2' style={{ color: "var(--text-icon-light-body, #33353A)", }}>Notion</div>
                </div>

            </Row>
        </Container>
    );
}

export default UIUXTools;