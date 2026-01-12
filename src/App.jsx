import React from 'react';
import FloatingLines from './components/FloatingLines';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* 1. Background Layer */}
      <div className="bg-layer">
        <FloatingLines
          /* Using bright pinks and purples */
          linesGradient={['#ff00ff', '#7000ff', '#00d4ff']}
          lineCount={[10, 10, 10]}
          lineDistance={[5, 4, 3]}
          animationSpeed={0.5}
          interactive={true}
          /* Keep the bend strong so you can see it under the cards */
          bendStrength={-1.8}
        />
      </div>

      {/* 2. Content Layer */}
      <div className="content-layer">
        <header>
          <div className="logo">
            <span className="icon">&lt;/&gt;</span>
            <div className="logo-text">
              <strong>E-TAN</strong>
              <small>EXTC Tech Network</small>
            </div>
          </div>
          <nav>
            <a href="#">Home</a>
            <a href="#" className="active">About</a>
            <a href="#">Events</a>
            <a href="#">Gallery</a>
            <a href="#">Team</a>
            <a href="#">Contact</a>
            <button className="btn-register-nav">Register</button>
          </nav>
        </header>

        <main className="container">
          <section className="about-hero">
            <h1>About <span>E-TAN</span></h1>
            <p className="subtitle">Empowering students to create meaningful change through technology</p>
          </section>

          <div className="about-grid">
            <div className="info-column">
              <div className="card mission-card">
                <div className="card-header">
                  <div className="card-icon blue-icon">🎯</div>
                  <h3>Our Mission</h3>
                </div>
                <p>To leverage technological advancements to address and solve pressing social issues, creating a better tomorrow through innovation and collaboration.</p>
              </div>

              <div className="card values-card">
                <div className="card-header">
                  <div className="card-icon orange-icon">🧡</div>
                  <h3>What We Stand For</h3>
                </div>
                <p>We believe in the power of technology to drive social inclusion and positive change. Every project we undertake aims to make a meaningful impact in society.</p>
              </div>
            </div>

            <div className="goals-column">
              <div className="card goals-card">
                <div className="card-header">
                  <span className="small-icon">📈</span>
                  <h3>Our Goals</h3>
                </div>
                <ul className="goals-list">
                  <li><span>1</span> Develop innovative tech-based solutions that address real-world social challenges</li>
                  <li><span>2</span> Raise awareness about pressing social issues through technology-driven campaigns</li>
                  <li><span>3</span> Foster a collaborative community where students can learn, innovate, and create impact together</li>
                </ul>
              </div>

              <div className="stats-row">
                <div className="stat-box blue-bg">
                  <h2>100+</h2>
                  <p>Active Members</p>
                </div>
                <div className="stat-box orange-bg">
                  <h2>20+</h2>
                  <p>Projects Launched</p>
                </div>
              </div>
            </div>
          </div>
          {/* Upcoming Events Section */}
        <section className="events-section">
          <div className="section-header">
            <h1>Upcoming <span>Events</span></h1>
            <p className="subtitle">Join us for exciting workshops, hackathons, and networking opportunities</p>
          </div>

          <div className="events-grid">
            {/* Card 1 */}
            <div className="event-card border-blue">
              <div className="event-date">📅 December 15, 2025</div>
              <h3>Tech Workshop: AI & Machine Learning</h3>
              <p>Hands-on workshop exploring the fundamentals of AI and ML applications in social impact.</p>
              <div className="event-details">
                <span>🕒 2:00 PM - 5:00 PM</span>
                <span>📍 SFIT Campus, Lab 301</span>
              </div>
              <button className="btn-event-blue">Register Now →</button>
            </div>

            {/* Card 2 */}
            <div className="event-card border-cyan">
              <div className="event-date">📅 January 20, 2026</div>
              <h3>Hackathon: Code for Change</h3>
              <p>Build innovative solutions to real-world problems in this 12-hour coding marathon.</p>
              <div className="event-details">
                <span>🕒 9:00 AM - 9:00 PM</span>
                <span>📍 SFIT Main Auditorium</span>
              </div>
              <button className="btn-event-cyan">Register Now →</button>
            </div>

            {/* Card 3 */}
            <div className="event-card border-red">
              <div className="event-date">📅 February 5, 2026</div>
              <h3>Guest Lecture: Tech for Social Good</h3>
              <p>Industry experts share insights on leveraging technology for social impact.</p>
              <div className="event-details">
                <span>🕒 4:00 PM - 6:00 PM</span>
                <span>📍 Virtual Event</span>
              </div>
              <button className="btn-event-red">Register Now →</button>
            </div>
          </div>

          <button className="btn-view-all">View All Events</button>
        </section>
        </main>
      </div>
    </div>
  );
}

export default App;