import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import MobileCallButton from './components/MobileCallButton';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Insurance from './pages/Insurance';
import FlightBooking from './pages/FlightBooking';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F6F8FC] text-[#17243B] font-sans antialiased selection:bg-[#E51B27] selection:text-white relative">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/real-estate" element={<Navigate to="/projects" replace />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/flight-booking" element={<FlightBooking />} />
            <Route path="/flights" element={<Navigate to="/flight-booking" replace />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Interactive Floating CTAs */}
        <WhatsAppButton />
        <MobileCallButton />
      </div>
    </Router>
  );
}
