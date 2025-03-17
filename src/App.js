import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  // Add this at the top of your App component
const [isAnnual, setIsAnnual] = useState(false);

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
              <li className={activeNavItem === 'pricing' ? 'active' : ''} onClick={() => scrollToSection('pricing')}>Pricing</li>
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

      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Our Pricing Plans</h2>
          <p className="pricing-subtitle">Choose the perfect plan for your business needs</p>
          
          <div className="pricing-toggle">
            <span className={!isAnnual ? 'active m-10' : 'm-10'}>Monthly</span>
            <label className="switch">
              <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
              <span className="slider round"></span>
            </label>
            <span className={isAnnual ? 'active m-10' : 'm-10'}>Annual <span className="discount">Save 20%</span></span>
          </div>
          
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Basic</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{isAnnual ? '399' : '499'}</span>
                  <span className="period">{isAnnual ? '/month' : '/month'}</span>
                </div>
                <p className="pricing-subtitle">Perfect for small businesses</p>
              </div>
              <div className="pricing-body">
                <ul className="pricing-features">
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Basic SEO Optimization</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Responsive Website Design</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">5 Web Pages</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">1 Logo Design</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Monthly Performance Report</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-footer">
                <button className="pricing-button" onClick={() => scrollToSection('contact')}>Get Started</button>
              </div>
            </div>
            
            <div className="pricing-card popular">
              <div className="popular-tag">Most Popular</div>
              <div className="pricing-header">
                <h3>Pro</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{isAnnual ? '799' : '999'}</span>
                  <span className="period">{isAnnual ? '/month' : '/month'}</span>
                </div>
                <p className="pricing-subtitle">Ideal for growing businesses</p>
              </div>
              <div className="pricing-body">
                <ul className="pricing-features">
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Advanced SEO Optimization</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Custom Website Design</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">10 Web Pages</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">3 Logo Concepts</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Social Media Integration</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Bi-weekly Performance Reports</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-footer">
                <button className="pricing-button featured" onClick={() => scrollToSection('contact')}>Get Started</button>
              </div>
            </div>
            
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Enterprise</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{isAnnual ? '1599' : '1999'}</span>
                  <span className="period">{isAnnual ? '/month' : '/month'}</span>
                </div>
                <p className="pricing-subtitle">For established businesses</p>
              </div>
              <div className="pricing-body">
                <ul className="pricing-features">
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Premium SEO Strategy</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Custom Web Development</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Unlimited Web Pages</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Complete Brand Identity</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">E-commerce Integration</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Weekly Performance Reports</span>
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">Dedicated Account Manager</span>
                  </li>
                </ul>
              </div>
              <div className="pricing-footer">
                <button className="pricing-button" onClick={() => scrollToSection('contact')}>Get Started</button>
              </div>
            </div>
          </div>
          
          <div className="custom-plan">
            <h3>Need a custom plan?</h3>
            <p>We offer tailored solutions to meet your specific business requirements.</p>
            <button className="custom-plan-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
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