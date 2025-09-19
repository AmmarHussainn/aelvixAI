import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CalendlyBooking from './pages/CalendlyBooking';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiesPolicy from './pages/CookiesPolicy';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-black font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/calendly-booking' element={ <CalendlyBooking/>} />
            <Route path='/termsandcondition' element={<TermsAndConditions/>} />
            <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
            <Route path="/cookiepolicy" element={<CookiesPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;