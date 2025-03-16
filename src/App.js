import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveNavItem(sectionId);
    setMenuOpen(false);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-text">DigiKarma</span>
            <span className="logo-accent">Solutions</span>
          </div>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li className={activeNavItem === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</li>
              <li className={activeNavItem === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>Services</li>
              <li className={activeNavItem === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</li>
              <li className={activeNavItem === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="animated-bg"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="animated-title">Transform Your Digital Presence</h1>
            <p className="animated-subtitle">Innovative web solutions to help your business thrive in the digital world</p>
            <button className="cta-button pulse" onClick={() => scrollToSection('contact')}>Get Started</button>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <ServiceCard 
              title="SEO Optimization" 
              description="Boost your search rankings and increase organic traffic with our data-driven SEO strategies."
              icon="🔍"
            />
            <ServiceCard 
              title="Website Design" 
              description="Custom, responsive designs that reflect your brand and engage your visitors."
              icon="🎨"
            />
            <ServiceCard 
              title="Web Development" 
              description="Scalable, high-performance websites built with cutting-edge technologies."
              icon="💻"
            />
            <ServiceCard 
              title="Graphic Design" 
              description="Eye-catching visuals that communicate your brand message effectively."
              icon="✏️"
            />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About DigiKarma Solutions</h2>
          <div className="about-content">
            <div className="about-text">
              <p>DigiKarma Solutions is a full-service digital marketing agency dedicated to helping businesses establish a powerful online presence. Founded in 2018, we've helped over 200 clients achieve their digital marketing goals.</p>
              <p>Our team of experts combines creativity with technical expertise to deliver solutions that not only look great but also drive results. We believe in transparent communication, measurable outcomes, and building long-term relationships with our clients.</p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-text">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-text">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-text">Projects Completed</span>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message!</button>
              </form>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h4>Address</h4>
                  <p>Sri Ganganagar (Raj.)</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-text">
                  <h4>Phone</h4>
                  <p>+91 9783473502</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>aitech.lavish@gmail.com</p>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.instagram.com/digikarma_solutions/" className="social-icon">IG</a>
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">LI</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">DigiKarma</span>
              <span className="logo-accent">Solutions</span>
            </div>
            <p className="copyright">© 2018 DigiKarma Solutions. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, description, icon }) {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button className="service-button" onClick={scrollToContact}>Learn More</button>
    </div>
  );
}

export default App;