import React, { useEffect } from 'react'
import './Header.css'
import Logo from '../../assets/Logo.png'
import SocialIcon1 from '../../assets/HeaderSocialIcon1.png'
import SocialIcon2 from '../../assets/HeaderSocialIcon2.png'
import SocialIcon3 from '../../assets/HeaderSocialIcon3.png'
import SocialIcon4 from '../../assets/HeaderSocialIcon4.png'
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    // Check if the current path matches the provided path
    return location.pathname === path;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <div className='main-heading'>
        <img onClick={() => { navigate('/') }} src={Logo} className='main-logo' alt='main-logo' />
        <div className='social-icons-section'>
          <img src={SocialIcon1} className='header-social-icon' alt='social-icon' />
          <img src={SocialIcon2} className='header-social-icon' alt='social-icon' />
          <img src={SocialIcon3} className='header-social-icon' alt='social-icon' />
          <img src={SocialIcon4} className='header-social-icon' alt='social-icon' />
        </div>
      </div>

      <div className='header-section'>
        <div className='nav-items-section'>
          <h2 className={`nav-items ${isActive('/') || isActive('/home') ? 'active' : ''}`} onClick={() => { navigate('/home') }}>Home</h2>
          <h2 className={`nav-items ${isActive('/services') ? 'active' : ''}`} onClick={() => { navigate('/services') }}>Services</h2>
          <h2 className={`nav-items ${isActive('/work') ? 'active' : ''}`} onClick={() => { navigate('/work') }}>Work</h2>
          <h2 className={`nav-items ${isActive('/about') || isActive('/carrer') ? 'active' : ''}`} onClick={() => { navigate('/about') }}>About</h2>
          <h2 className={`nav-items ${isActive('/contact') ? 'active' : ''}`} onClick={() => { navigate('/contact') }}>Contact</h2>
        </div>
      </div>

    </div>
  )
}

export default Header