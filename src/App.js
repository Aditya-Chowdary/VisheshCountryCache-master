import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js'
import Header from './Components/HeaderComponent/Header.js'
import ServicesPage from './Components/ServicesPage/ServicesPage.js'
import WorkPage from './Components/WorkPage/WorkPage.js'
import AboutPage from './Components/AboutPage/AboutPage.js'
import ContactPage from './Components/ContactPage/ContactPage.js'
import Footer from './Components/FooterComponent/Footer.js';
import SriChaitanyaCaseStudy from './Components/CaseStudiesPages/SriChaitanyaCaseStudy.js';
import PrivacyPolicy from './Components/PrivacyPolicyPage/PrivacyPolicy.js';
import Career from './Components/CareerPage/Career.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='home' Component={HomePage} />
        <Route path='services' Component={ServicesPage} />
        <Route path='work' Component={WorkPage} />
        <Route path='about' Component={AboutPage} />
        <Route path='contact' Component={ContactPage} />
        <Route path='career' Component={Career} />
        <Route path='privacy-policy' Component={PrivacyPolicy} />
        <Route path='case-studies1' Component={SriChaitanyaCaseStudy} />
        <Route path='*' Component={HomePage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
