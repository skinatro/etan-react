import { useEffect, useRef } from 'react'
import './App.css'
import sfit_build_nobkg from './assets/home-page/sfit-build-nobkg.png'
import sky from './assets/home-page/sky.jpg'
import etan_text from './assets/home-page/etan-text.png'
import Dock from './components/dock/dock';
import Team from "./components/team-page/Team";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  VscHome, VscCalendar, VscFiles,
  VscOrganization
} from 'react-icons/vsc';

import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

function App() {
  const buildingRef = useRef(null)
  const textRef = useRef(null)
  const scrollIndicatorRef = useRef(null)

  const navigate = useNavigate();

  const navItems = [
      { icon: <VscHome size={22} />, label: 'Home', onClick: () => navigate("/") },
      { icon: <VscCalendar size={22} />, label: 'Events', onClick: () => console.log('Events clicked') },
      { icon: <VscFiles size={22} />, label: 'Gallery', onClick: () => console.log('Gallery clicked') },
      { icon: <VscOrganization size={22} />, label: 'Team', onClick: () => navigate("/team") },
    ];

   // Right dock - Contact/Social items
  const contactItems = [
    { icon: <FaInstagram size={22} />, label: 'Instagram', onClick: () => window.open('https://www.instagram.com/etan_sfit/', '_blank') },
    { icon: <FaLinkedin size={22} />, label: 'LinkedIn', onClick: () => window.open('https://www.linkedin.com/company/etan-sfit/', '_blank') },
    { icon: <MdEmail size={22} />, label: 'Email', onClick: () => window.location.href = 'mailto:etan@sfit.ac.in' },
    { icon: <MdLocationOn size={22} />, label: 'Location', onClick: () => window.open('https://maps.app.goo.gl/XV3PUBU3ASCFC6Tz9?g_st=aw', '_blank') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = window.innerHeight * 0.65 // Adjust this to control how far user can scroll
      
      // Clamp scroll value
      const effectiveScroll = Math.min(scrolled, maxScroll)
      
      // Detect mobile device
      const isMobile = window.innerWidth <= 768
      
      // Move building up from bottom as user scrolls
      if (buildingRef.current) {
        // Start from bottom (translateY(100%)) and move to final position
        const buildingProgress = effectiveScroll / maxScroll
        const buildingTranslate = 100 - (buildingProgress * 100) // 100% to 0%
        buildingRef.current.style.transform = `translateX(-50%) translateY(${buildingTranslate}%)`
      }
      
      // Move text - DOWN on mobile (to go behind building), UP on desktop
      if (textRef.current) {
        if (isMobile) {
          // On mobile: move text DOWN so bottom goes behind building
          const textTranslate = (effectiveScroll * 0.3) // Move down (positive value)
          textRef.current.style.transform = `translate(-50%, calc(-50% + ${textTranslate}px))`
        } else {
          // On desktop: move text up but not as much as building
          const textTranslate = -(effectiveScroll * 0.55) // Move up (negative value)
          textRef.current.style.transform = `translate(-50%, calc(-50% + ${textTranslate}px))`
        }
      }
      
      // Move scroll indicator down and fade out when scrolled ~80-90%
      if (scrollIndicatorRef.current) {
        const scrollProgress = effectiveScroll / maxScroll
        // Start moving down at 80% scroll progress
        if (scrollProgress >= 0.8) {
          const fadeProgress = (scrollProgress - 0.8) / 0.2 // 0 to 1 over the last 20%
          const translateY = fadeProgress * 100 // Move down by 100px
          const opacity = 1 - fadeProgress // Fade out
          scrollIndicatorRef.current.style.transform = `translate(-50%, ${translateY}px)`
          scrollIndicatorRef.current.style.opacity = opacity
        } else {
          scrollIndicatorRef.current.style.transform = 'translate(-50%, 0)'
          scrollIndicatorRef.current.style.opacity = '1'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll) // Re-calculate on resize/orientation change
    handleScroll() // Initialize positions
    
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
            <>
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
            </>//home Route closed here
            }/>

            <Route path="/team" element={<Team />} />
          </Routes>
      
      {/* Left Dock - Navigation */}
      <Dock items={navItems} position="left" />
      
      {/* Right Dock - Contact/Social */}
      <Dock items={contactItems} position="right" />
    </div>
  )
}

export default App