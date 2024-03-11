import React from 'react';
import "./DigitalMarketingTools.css"
import { Container, Image, Table } from 'react-bootstrap';
import image1 from "../../../../../assets/ServicePage/Hubspot.png";
import image2 from "../../../../../assets/ServicePage/WordPress.png";
import image3 from "../../../../../assets/ServicePage/Oracle.png";
import image4 from "../../../../../assets/ServicePage/MailChimp.png";
import image5 from "../../../../../assets/ServicePage/Google Analytics.png";
import image6 from "../../../../../assets/ServicePage/Google Ads.png";
import image7 from "../../../../../assets/ServicePage/Meta.png";


function DigitalMarketingTools(props) {
    return (
        <Container>
            <Table className='DigitalMarketingTools-Row'>
                <tr>
                    <td className='DigitalMarketingTools-image'>
                        <Image src={image1} alt='DigitalMarketing' style={{ maxWidth: '120%', height: 'auto', backgroundColor: "transparent" }} />
                    </td>
                    <td className='DigitalMarketingTools-image'>
                        <Image src={image2} alt='DigitalMarketing' style={{ maxWidth: '120%', height: 'auto', backgroundColor: "transparent" }} />
                    </td>
                    <td className='DigitalMarketingTools-image'>
                        <Image src={image3} alt='DigitalMarketing' style={{ maxWidth: '100%', height: 'auto', backgroundColor: "transparent" }} />
                    </td>
                    <td className='DigitalMarketingTools-image'>
                        <Image src={image4} alt='DigitalMarketing' style={{ minWidth: '40%', maxWidth: '90%', height: 'auto', backgroundColor: "transparent" }} />
                    </td>
                </tr>
                <tr>
                    <td className='TableData' ></td>
                    <td className='TableData'></td>
                    <td className='TableData'></td>
                    <td className='TableData'> <div className='footer-section-text2' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>MailChimp</div></td>
                </tr>
                <tr>
                    <td className='PhotosBetweenMargin'>
                        <div className='PhotosBetweenMargin' style={{ backgroundColor: 'transparent' }}></div>
                    </td>
                </tr>

                <tr>
                    <td className='DigitalMarketingTools-image' >
                        <Image src={image5} alt='DigitalMarketing' style={{ maxWidth: '80%', height: 'auto', backgroundColor: "transparent" }} />

                    </td>
                    <td className='DigitalMarketingTools-image'>
                        <Image src={image6} alt='DigitalMarketing' style={{ maxWidth: '100%', height: 'auto', backgroundColor: "transparent" }} />

                    </td>
                    <td className='DigitalMarketingTools-image'>
                        <Image src={image7} alt='DigitalMarketing' style={{ maxWidth: '180%', height: 'auto', backgroundColor: "transparent" }} />

                    </td>
                </tr>
                <tr>
                    <td className='TableData' > <div className='footer-section-text2' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Google Analytics</div></td>
                    <td className='TableData'> <div className='footer-section-text2' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Google Ads</div></td>
                    <td className='TableData'> <div className='footer-section-text2' style={{ color: "var(--text-icon-light-body, #33353A)", backgroundColor: 'transparent', margin: 0, padding: 0 }}>Meta</div></td>
                </tr>
            </Table>
        </Container>
    );
}

export default DigitalMarketingTools;