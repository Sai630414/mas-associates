import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Shield, MapPin, ChevronRight, Plane } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyInfo';
import { WhatsAppButtonUI } from './Buttons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Real Estate', path: '/projects' },
    { name: 'Insurance', path: '/insurance' },
    { name: 'Flight Booking', path: '/flight-booking', isNew: true },
  ];

  return (
    <>
      {/* Top Header Bar for Trust & Quick Phone Contacts */}
      <div className="bg-[#061838] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-[#E51B27]" />
              LIC Agency Since 1985 &bull; Real Estate &bull; Flight Ticketing
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#0864C5]" />
              Tamil Nadu &bull; Bangalore &bull; Pan-India &amp; International Flights
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.contact.primaryPhone}</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <span>{COMPANY_INFO.contact.secondaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md border-b border-slate-200/80 py-2.5'
            : 'bg-white shadow-xs py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-lg bg-white p-1 transition-transform group-hover:scale-105 duration-200 shadow-xs border border-slate-100">
                <img
                  src="/logo/mas-logo.png"
                  alt="MAS ASSOCIATES Logo"
                  className="h-10 sm:h-11 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/logo/mas-logo.jpeg';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#092C68] tracking-tight leading-none group-hover:text-[#0864C5] transition-colors">
                  MAS <span className="text-[#E51B27]">ASSOCIATES</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-1">
                  Real Estate &bull; Insurance &bull; Travel
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-xs xl:text-sm font-semibold transition-all duration-150 relative ${
                      isActive
                        ? 'text-[#092C68] bg-[#EEF4FD] font-bold border-b-2 border-[#E51B27]'
                        : 'text-slate-700 hover:text-[#0864C5] hover:bg-slate-50'
                    }`
                  }
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {link.isNew && (
                      <span className="bg-[#E51B27] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase tracking-wider">
                        New
                      </span>
                    )}
                  </span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#092C68] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Open mobile navigation drawer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Elegant Slide-Out Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-300">
            {/* Drawer Header */}
            <div>
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-[#F6F8FC]">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo/mas-logo.png"
                    alt="MAS ASSOCIATES Logo"
                    className="h-9 w-auto object-contain"
                  />
                  <div>
                    <span className="font-heading font-extrabold text-lg text-[#092C68] block leading-tight">
                      MAS <span className="text-[#E51B27]">ASSOCIATES</span>
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
                      Menu Navigation
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                  aria-label="Close navigation drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="p-4 space-y-1 overflow-y-auto max-h-[calc(100vh-250px)]">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-[#EEF4FD] text-[#092C68] border-l-4 border-[#E51B27]'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-[#0864C5]'
                      }`
                    }
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                      {link.isNew && (
                        <span className="bg-[#E51B27] text-white text-[9px] font-bold px-1.5 py-0.2 rounded uppercase">
                          New
                        </span>
                      )}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                  className="flex items-center justify-center gap-1.5 h-10 rounded-lg border border-slate-300 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call Primary</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`}
                  className="flex items-center justify-center gap-1.5 h-10 rounded-lg border border-slate-300 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call Alt</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
