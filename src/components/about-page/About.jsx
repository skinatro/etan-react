import React from 'react';
import FloatingLines from '../floating-lines/FloatingLines';
import './About.css';

function About() {
  return (
    <div className="app-wrapper">
      {/* Background Layer */}
      <div className="bg-layer">
        <FloatingLines
          linesGradient={["#34D399", "#06B6D4", "#8B5CF6", "#afacac"]}
          enabledWaves={['middle', 'bottom']}
          lineCount={[15, 15]}
          lineDistance={[8, 8]}
          bottomWavePosition={{ x: 0, y: -1.5, rotate: 1.85 }}
          middleWavePosition={{ x: 2, y: 1.5, rotate: 1.85 }}
          animationSpeed={3.3}
          parallaxStrength={0.5}
          interactive={true}
          bendStrength={-3}
        />
      </div>

      {/* Content Layer */}
      <div className="content-layer">
        {/* Hero Section */}
        <section className="about-hero">
        <div className="logo-container" style={{ marginBottom: '40px' }}>
          <img 
            src="/etan-logo.webp" 
            alt="E-TAN Logo" 
            style={{ 
              width: '180px', 
              height: 'auto',
              filter: 'drop-shadow(0 0 20px rgba(139, 92, 246, 0.3))'
            }} 
          />
        </div>
        <h1>About <span>Us</span></h1>
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginTop: '20px', 
          marginBottom: '30px',
          fontWeight: '600'
        }}>
          E-TAN (EXTC's Tech Application Network) @ SFIT
        </h2>
      </section>

      {/* Main Content */}
      <div className="about-container">
        <div className="content-section" style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
          <div className="card main-description" style={{ padding: '50px' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '30px', color: 'rgba(255, 255, 255, 0.9)' }}>
              EXTC's Tech Application Network is a dynamic college committee at St. Francis Institute of Technology (SFIT) dedicated to using technology for social causes. Our mission is to leverage technological advancements to address and solve pressing social issues, creating a meaningful impact on our community and beyond.
            </p>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', marginBottom: '30px', color: 'rgba(255, 255, 255, 0.9)' }}>
              At E-TAN, we believe in the power of innovation and collaboration. Our team is composed of passionate students and professionals who are committed to bridging the gap between technology and social causes. Through various projects, workshops, and initiatives, <strong style={{ color: '#fff' }}>we aim to:</strong>
            </p>

            <div className="goals-section" style={{ marginTop: '30px' }}>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <li style={{ 
                  display: 'flex', 
                  gap: '15px',
                  alignItems: 'flex-start',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  <span style={{ 
                    fontWeight: '700', 
                    color: '#fff',
                    minWidth: '25px'
                  }}>1.</span>
                  <span>Develop and implement tech-based solutions for social challenges.</span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  gap: '15px',
                  alignItems: 'flex-start',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  <span style={{ 
                    fontWeight: '700', 
                    color: '#fff',
                    minWidth: '25px'
                  }}>2.</span>
                  <span>Raise awareness about critical social issues through technology.</span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  gap: '15px',
                  alignItems: 'flex-start',
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  <span style={{ 
                    fontWeight: '700', 
                    color: '#fff',
                    minWidth: '25px'
                  }}>3.</span>
                  <span>Foster a community of like-minded individuals dedicated to making a difference.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;