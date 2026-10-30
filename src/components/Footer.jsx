import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Shield, Award, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyInfo';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#061838] text-slate-300 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#0864C5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-[#E51B27]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Founder Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 bg-white px-3 py-2 rounded-xl shadow-sm">
              <img
                src="/logo/mas-logo.png"
                alt="MAS ASSOCIATES Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/logo/mas-logo.jpeg';
                }}
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg text-[#092C68] tracking-tight">
                  MAS <span className="text-[#E51B27]">ASSOCIATES</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
                  Real Estate &bull; Insurance &bull; Flight Booking
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              Founded by <span className="text-white font-semibold">{COMPANY_INFO.founder.name}</span>, MAS ASSOCIATES delivers premier residential plotted ventures across Tamil Nadu & Bangalore, seasoned life & general insurance guidance, and dedicated domestic & international flight ticket booking assistance.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-md text-slate-200">
                <Shield className="w-3.5 h-3.5 text-[#E51B27]" />
                LIC Agent Since 1985
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-md text-slate-200">
                <Award className="w-3.5 h-3.5 text-[#0864C5]" />
                Plot Promoter Since 2019
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-heading font-semibold text-white text-base tracking-wide uppercase text-xs border-b border-white/10 pb-2">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 text-[#0864C5] group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 text-[#0864C5] group-hover:translate-x-1 transition-transform" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 text-[#0864C5] group-hover:translate-x-1 transition-transform" />
                  Real Estate
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 text-[#0864C5] group-hover:translate-x-1 transition-transform" />
                  Insurance
                </Link>
              </li>
              <li>
                <Link to="/flight-booking" className="hover:text-white transition-colors flex items-center gap-1 group">
                  <ArrowRight className="w-3 h-3 text-[#0864C5] group-hover:translate-x-1 transition-transform" />
                  Flight Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Professional Roles & Partnerships (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-semibold text-white text-base tracking-wide uppercase text-xs border-b border-white/10 pb-2">
              Key Partnerships
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E51B27] mt-1.5 shrink-0" />
                <span><strong className="text-white">VIP City Housing</strong> &bull; Zonal Head</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E51B27] mt-1.5 shrink-0" />
                <span><strong className="text-white">SSLY City</strong> &bull; Director</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E51B27] mt-1.5 shrink-0" />
                <span><strong className="text-white">DREAM CITY</strong> Dindigul &bull; Channel Partner</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E51B27] mt-1.5 shrink-0" />
                <span><strong className="text-white">GVN HOMES</strong> Chennai &bull; Channel Partner</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E51B27] mt-1.5 shrink-0" />
                <span><strong className="text-white">METRO HOMES</strong> Bangalore &bull; BDM</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Insurance Representations:
              </span>
              <p className="text-xs text-slate-300 leading-snug">
                Life Insurance Corporation of India (LIC) &bull; United India Insurance &bull; Galaxy Health Insurance
              </p>
            </div>
          </div>

          {/* Column 4: Contact Actions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-heading font-semibold text-white text-base tracking-wide uppercase text-xs border-b border-white/10 pb-2">
              Get In Touch
            </h3>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0864C5] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Current Base & Native:</span>
                  <span>Bangalore, Karnataka &bull; Madurai, Tamil Nadu</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="text-white hover:text-emerald-400 transition-colors block font-medium">
                    {COMPANY_INFO.contact.primaryPhone} (Primary)
                  </a>
                  <a href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`} className="text-slate-300 hover:text-white transition-colors block">
                    {COMPANY_INFO.contact.secondaryPhone} (Alt)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E51B27] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-slate-200 hover:text-white transition-colors break-all">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hello MAS ASSOCIATES, I want to connect regarding your property projects and advisory.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2.5 rounded-lg text-xs font-semibold shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; {currentYear} MAS ASSOCIATES. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed for Premium Trust &bull; Tamil Nadu & Bangalore</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
