import React, { useEffect } from 'react';
import './HomePage.css';
import video from '../../assets/HomePage/Video.webm';
import OurServices from './OurServicesComponent/OurServices';
import ClientLogos from './ClientLogosComponent/ClientLogos';
import Reviews from './ReviewsComponent/Reviews';
import WorkWithUs from './WorkWithUsComponent/WorkWithUs';
import AboutUs from './AboutUsComponent/AboutUs';
import CardsComponent from './CardsComponent/CardsComponent';
import VectorSVG from '../../assets/HomePage/Vector.svg'
import { Helmet } from 'react-helmet';
import Projects from './ProjectsComponent/Projects';

function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Vishesh Country Cache - Home</title>
        <link rel="canonical" href="https://www.visheshcountrycache.com/" />
        <meta name='description' content='Foster intellect with Vishesh Country Cache – Your destination for innovative solutions. We specialize in creative design, digital marketing, data analysis, full stack development, and UI/UX. Elevate your online presence with our cutting-edge services.' />
        <meta name='keywords' content='vishesh country cache Private Limited, software companies in village, software development company, top 10 software companies in india, software solutions company, software testing company, near by software company, software engineering companies , vacancies in small software companies for freshers, 
        software development companies near me, data software research company, software company jobs, best companies for software engineers, best software development company, internship in software company, software consulting companies, vishesh country cache software company, vishesh country cache private limited in undrajavaram, 
        software company, software company near me, vishesh software company in tanuku, software companies in tanuku, best digital marketing company near me, best digital marketing company in tanuku, website development company, best marketing analysis company in tanuku, best software company in city out cuts, top software companies in tanuku' />
        <meta name="author" content="Vishesh Country Cache" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>

      {/**    Video Section       */}
      <video className='video1' controls autoPlay muted loop>
        <source src={video} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/**    Our Services Section */}
      <OurServices />

      {/**    About Us Section     */}
      <AboutUs />

      {/**    Why Us Cards Section */}
      <CardsComponent />

      {/* Featured Projects Section  */}
      <Projects />

      {/**    logo slider          */}
      <ClientLogos />

      {/**    Reviews Section        */}
      <Reviews />

      {/**    teams heading SCROLLING Section  */}
      <div className='team-heading-sections1'>
        <hr />
        <div className="scroll-container1">
          <div className="scroll-text">
            <h1 className='team-scroll-heading'>
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' />
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' />
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' />
              CREATIVE DESIGN  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> FULL STACK DEVELOPMENT <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> CREATIVE DESIGN  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> UI/UX <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> FULL STACK DEVELOPMENT  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> </h1>
          </div>
        </div>
        <hr />
        <div className="scroll-container1">
          <div className="scroll-text2">
            <h1 className='team-scroll-heading'>
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' />
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' />
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' />
              DIGITAL MARKETING  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> DIGITAL MARKETING <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> MARKETING ANALYSIS  <img className='heading-scroll-img1' src={VectorSVG} alt='star-vector' /> </h1>
          </div>
        </div>
        <hr />
      </div>

      {/**    Work with us section         */}
      <WorkWithUs />

    </div>
  );
}

export default HomePage;
