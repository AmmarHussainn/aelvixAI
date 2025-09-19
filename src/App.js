import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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


const RouteWithScrollTop = ({ children }) => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return children;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-black font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>


            <Route path="/" element={
               <RouteWithScrollTop>

                 <Home />
               </RouteWithScrollTop>
              } />
            <Route path="/about" element={
              <RouteWithScrollTop>
              <About />
              
              </RouteWithScrollTop>
              } />
            <Route path="/services" element={
               <RouteWithScrollTop>

                 <Services />
               </RouteWithScrollTop>
              } />
            <Route path="/projects" element={
              <RouteWithScrollTop>
              <Projects />
              </RouteWithScrollTop>
              } />
            <Route path="/contact" element=
            {
                <RouteWithScrollTop>

                  <Contact />
                </RouteWithScrollTop>
            
            } />
            <Route path='/calendly-booking' element={
                <RouteWithScrollTop>

                  <CalendlyBooking/>
                </RouteWithScrollTop>
              } />
            <Route path='/termsandcondition' element={
                <RouteWithScrollTop>


                  <TermsAndConditions/>
                </RouteWithScrollTop>
              } />
            <Route path='/privacypolicy' element={
                <RouteWithScrollTop>

                  <PrivacyPolicy/>
                </RouteWithScrollTop>
              } />
            <Route path="/cookiepolicy" element={
                <RouteWithScrollTop>

                  <CookiesPolicy />
                </RouteWithScrollTop>
              } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;