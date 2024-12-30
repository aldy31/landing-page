import React from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1>My Landing Page</h1>
      <nav>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <h2>Welcome to Our Website</h2>
      <p>Discover amazing features and possibilities with us.</p>
      <button>Get Started</button>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-item">Feature 1</div>
      <div className="feature-item">Feature 2</div>
      <div className="feature-item">Feature 3</div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 My Landing Page. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
