import { useEffect, useRef, useState } from 'react'
import './App.css'
import sfit_build_nobkg from './assets/home-page/sfit-build-nobkg.png'
import sky from './assets/home-page/sky.jpg'
import etan_text from './assets/home-page/etan-text.png'
import Dock from './components/dock/dock';
import Store from './components/store-page/Store';
import Team from "./components/team-page/Team";
import AlbumGallery from './components/gallery-stack/AlbumGallery'; // Correct path
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  VscHome, VscCalendar, VscFiles,
  VscOrganization
} from 'react-icons/vsc';

import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { RiStore2Line } from "react-icons/ri";

function App() {
  const buildingRef = useRef(null)
  const textRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate();

  const navItems = [
    { icon: <VscHome size={22} />, label: 'Home', onClick: () => navigate("/") },
    { icon: <VscCalendar size={22} />, label: 'Events', onClick: () => console.log('Events clicked') },
    { icon: <VscFiles size={22} />, label: 'Gallery',  onClick: () => navigate("/gallery") },
    { icon: <VscOrganization size={22} />, label: 'Team', onClick: () => navigate("/team") },
    { icon: <RiStore2Line size={22} />, label: 'Store', onClick: () => navigate("/store") },
  ];

  // Right dock - Contact/Social items
  const contactItems = [
    { icon: <FaInstagram size={22} />, label: 'Instagram', onClick: () => window.open('https://www.instagram.com/etan_sfit/', '_blank') },
    { icon: <FaLinkedin size={22} />, label: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/company/etan-sfit/', '_blank') },
    { icon: <MdEmail size={22} />, label: 'Email', onClick: () => window.location.href = 'mailto:etan@sfit.ac.in' },
    { icon: <MdLocationOn size={22} />, label: 'Location', onClick: () => window.open('https://maps.app.goo.gl/XV3PUBU3ASCFC6Tz9?g_st=aw', '_blank') },
  ];

  const handleMobileNavClick = (item) => {
    item.onClick();
  };

  const handleHamburgerClick = (item) => {
    item.onClick();
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Only run parallax logic if refs exist (home page only)
      if (!buildingRef.current && !textRef.current && !scrollIndicatorRef.current) {
        return;
      }

      const scrolled = window.scrollY
      const maxScroll = window.innerHeight * 0.65
      
      const effectiveScroll = Math.min(scrolled, maxScroll)
      
      const isMobile = window.innerWidth <= 768
      
      if (buildingRef.current) {
        const buildingProgress = effectiveScroll / maxScroll
        const buildingTranslate = 100 - (buildingProgress * 100)
        buildingRef.current.style.transform = `translateX(-50%) translateY(${buildingTranslate}%)`
      }
      
      if (textRef.current) {
        if (isMobile) {
          const textTranslate = (effectiveScroll * 0.28)
          textRef.current.style.transform = `translate(-50%, calc(-50% + ${textTranslate}px))`
        } else {
          const textTranslate = -(effectiveScroll * 0.55)
          textRef.current.style.transform = `translate(-50%, calc(-50% + ${textTranslate}px))`
        }
      }
      
      if (scrollIndicatorRef.current) {
        const scrollProgress = effectiveScroll / maxScroll
        if (scrollProgress >= 0.8) {
          const fadeProgress = (scrollProgress - 0.8) / 0.2
          const translateY = fadeProgress * 100
          const opacity = 1 - fadeProgress
          scrollIndicatorRef.current.style.transform = `translate(-50%, ${translateY}px)`
          scrollIndicatorRef.current.style.opacity = opacity
        } else {
          scrollIndicatorRef.current.style.transform = 'translate(-50%, 0)'
          scrollIndicatorRef.current.style.opacity = '1'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-parallax-container">
              {/* Static sky background */}
              <div className="sky-layer">
                <img src={sky} alt="Sky background" />
              </div>

              {/* E-TAN Text - starts at center, moves up on scroll */}
              <div className="text-layer" ref={textRef}>
                <img src={etan_text} alt="E-TAN Text" />
              </div>

              {/* Building - starts below viewport, rises up on scroll */}
              <div className="building-layer" ref={buildingRef}>
                <img src={sfit_build_nobkg} alt="Building" />
              </div>

              {/* Scroll indicator */}
              <div className="scroll-indicator" ref={scrollIndicatorRef}>
                <p>↓ Scroll Down ↓</p>
              </div>
            </div>
          }
        />

        <Route path="/team" element={<Team />} />
        <Route path="/store" element={<Store />} />
        <Route path="/gallery" element={<AlbumGallery />} />

      </Routes>
      
      {/* Desktop Docks - Hidden on mobile */}
      <div className="dock-container">
        <Dock items={navItems} position="left" />
      </div>
      <div className="dock-container">
        <Dock items={contactItems} position="right" />
      </div>

      {/* Mobile Navigation - Only visible on mobile */}
      {/* Bottom Navigation Bar */}
      <div className="mobile-bottom-nav">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="mobile-nav-item"
            onClick={() => handleMobileNavClick(item)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      Hamburger Menu Button
      <button
        className={`hamburger-button ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Menu Backdrop */}
      <div
        className={`menu-backdrop ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Hamburger Menu */}
      <div className={`hamburger-menu ${menuOpen ? 'active' : ''}`}>
        {contactItems.map((item, index) => (
          <button
            key={index}
            className="hamburger-menu-item"
            onClick={() => handleHamburgerClick(item)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default App