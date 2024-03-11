import React, { useState } from 'react'
import Tech1 from '../../../assets/ServicePage/Photoshop.png'
import Tech2 from '../../../assets/ServicePage/InDesign.png'
import Tech3 from '../../../assets/ServicePage/illustrator.png'
import Tech4 from '../../../assets/ServicePage/Premiere Pro.png'
import Tech5 from '../../../assets/ServicePage/Dimension.png'
import Tech6 from '../../../assets/ServicePage/Canva.png'
import Tech7 from '../../../assets/ServicePage/After Effects.png'
import Tech8 from '../../../assets/ServicePage/Davinci Resolve.png'
import Tech9 from '../../../assets/ServicePage/Figma.png'
import Tech10 from '../../../assets/ServicePage/Adobe XD.png'
import Tech11 from '../../../assets/ServicePage/Miro.png'
import Tech12 from '../../../assets/ServicePage/Notion.png'
import Tech13 from '../../../assets/ServicePage/Hubspot.png'
import Tech14 from '../../../assets/ServicePage/WordPress.png'
import Tech15 from '../../../assets/ServicePage/Oracle.png'
import Tech16 from '../../../assets/ServicePage/MailChimp.png'
import Tech17 from '../../../assets/ServicePage/Google Analytics.png'
import Tech18 from '../../../assets/ServicePage/Google Ads.png'
import Tech19 from '../../../assets/ServicePage/Meta.png'
import Tech20 from '../../../assets/ServicePage/Html.png'
import Tech21 from '../../../assets/ServicePage/css.png'
import Tech22 from '../../../assets/ServicePage/JavaScript.png'
import Tech23 from '../../../assets/ServicePage/Angular.png'
import Tech24 from '../../../assets/ServicePage/React.png'
import Tech25 from '../../../assets/ServicePage/Nodejs.png'
import Tech26 from '../../../assets/ServicePage/JQuery.png'
import Tech27 from '../../../assets/ServicePage/MongoDB.png'
import Tech28 from '../../../assets/ServicePage/Next.png'
import Tech29 from '../../../assets/ServicePage/MySql.png'
import Tech30 from '../../../assets/ServicePage/Expressjs.png'
import Tech31 from '../../../assets/ServicePage/PHP.png'
import Tech32 from '../../../assets/ServicePage/react-native.png'
import Tech33 from '../../../assets/ServicePage/Redux.png'
// import Tech34 from '../../../assets/ServicePage/'
// import Tech35 from '../../../assets/ServicePage/'
// import Tech36 from '../../../assets/ServicePage/'
import { Container, Row, Col, Image, Table } from 'react-bootstrap';

const CreativeDesign = [{ TechImage: Tech1 }, { TechImage: Tech2 }, { TechImage: Tech3 },{ TechImage: Tech4 }, { TechImage: Tech5 }, { TechImage: Tech6 }, { TechImage: Tech7 }, { TechImage: Tech8 }]
const UI_Ux = [{ TechImage: Tech9 }, { TechImage: Tech10 }, { TechImage: Tech11 }, { TechImage: Tech12 }]
const DigitalMarketing = [{ TechImage: Tech13 }, { TechImage: Tech14 }, { TechImage: Tech15 }, { TechImage: Tech16 }, { TechImage: Tech17 }, { TechImage: Tech18 }, { TechImage: Tech19 }]
const FullStackDevelopment = [{ TechImage: Tech20 }, { TechImage: Tech21 }, { TechImage: Tech22 },{ TechImage: Tech23 }, { TechImage: Tech24 }, { TechImage: Tech25 }, { TechImage: Tech26 }, { TechImage: Tech27 },
    { TechImage: Tech28 }, { TechImage: Tech29 }, { TechImage: Tech30 },{ TechImage: Tech31 }, { TechImage: Tech32 }, { TechImage: Tech33 }]
const MarketingAnalysis = [{ TechImage: Tech1 }]

function TechsToogle() {
    const [TeamClicks, setTeamClisks] = useState([1, 0, 0, 0, 0]);
    const [ToolsLogos, setToolsLogos] = useState(CreativeDesign);

    const handlClicks = (index) => {
        var temp = [0, 0, 0, 0, 0];
        temp[index] = 1;
        setTeamClisks([...temp]);
        switch (index) {
            case 0: setToolsLogos(CreativeDesign); break;
            case 1: setToolsLogos(UI_Ux); break;
            case 2: setToolsLogos(DigitalMarketing); break;
            case 3: setToolsLogos(FullStackDevelopment); break;
            case 4: setToolsLogos(MarketingAnalysis); break;
            default: ;
        }

    }

    return (
        <div>
            <Container fluid className='ToolsToggle-container'>
                <Row className='ToolsToggle-Row-1'>
                    <div className='ToolsToggle-Row-1-col'>
                        <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[0] && " ToolsToggle-active")} onClick={() => { handlClicks(0) }}>
                            <h6 className='ToolsToggle-h6'>
                                Creative Design
                            </h6>
                        </div>
                    </div>
                    <div className='ToolsToggle-Row-1-col'>
                        <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[1] && " ToolsToggle-active")} onClick={() => { handlClicks(1) }}>
                            <h6 className='ToolsToggle-h6'>
                                UI/UX
                            </h6>
                        </div>
                    </div>
                    <div className='ToolsToggle-Row-1-col'>
                        <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[2] && " ToolsToggle-active")} onClick={() => { handlClicks(2) }}>
                            <h6 className='ToolsToggle-h6'>
                                Digital Marketing
                            </h6>
                        </div>
                    </div>
                    <div className='ToolsToggle-Row-1-col'>
                        <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[3] && " ToolsToggle-active")} onClick={() => { handlClicks(3) }}>
                            <h6 className='ToolsToggle-h6'>
                                Full Stack Development
                            </h6>
                        </div>
                    </div>
                    <div className='ToolsToggle-Row-1-col'>
                        <div className={"ToolsToggle-Row-1-col-div " + (TeamClicks[4] && " ToolsToggle-active")} onClick={() => { handlClicks(4) }}>
                            <h6 className='ToolsToggle-h6'>
                                Marketing Analysis
                            </h6>
                        </div>
                    </div>
                </Row>
                <Table className='ToolsToggle-Row-2'>
                    <tr>
                        {
                            FullStackDevelopment.map((Logo, index) => {
                                return (
                                    <th key={index}>
                                    <img src={Logo.TechImage} alt='tech-logo' style={{backgroundColor: "transparent"}} />
                                    </th>
                                )
                            })
                        }
                    </tr>
                </Table>
            </Container>
        </div>
    )
}

export default TechsToogle