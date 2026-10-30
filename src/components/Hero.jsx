import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, MapPin, Building, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { PrimaryButton, SecondaryButton } from './Buttons';

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#061838]">
      {/* Background Image with High Quality Plotted Community Aesthetics */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85"
          alt="MAS ASSOCIATES Venture Plots Landscape"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
        />
        {/* Layered Gradient Overlays for maximum text contrast and luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061838]/95 via-[#092C68]/90 to-[#061838]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#061838]/60 to-[#061838]/95" />
      </div>

      {/* Decorative Grid Lines / Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium mb-6 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-[#E51B27] animate-ping" />
          <span className="text-slate-200">MAS ASSOCIATES &bull; Plots, Ventures & Advisory</span>
          <span className="bg-[#0864C5] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full text-white">
            Tamil Nadu & Bangalore
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.15] mb-6">
          Your Trusted Partner in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
            Land, Investments
          </span>{' '}
          & <span className="text-[#FF5A65]">Insurance</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed mb-10 font-normal">
          {COMPANY_INFO.subTagline} Backed by <strong className="text-white font-semibold">40+ years of LIC advisory trust</strong> and premier regional developer partnerships.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto justify-center mb-16">
          <PrimaryButton to="/projects" variant="navy">
            Explore Properties
          </PrimaryButton>

          <SecondaryButton href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`} className="text-white border-white/50 bg-white/10 hover:bg-white hover:text-[#092C68] hover:border-white">
            Talk to Our Team
          </SecondaryButton>
        </div>

        {/* Trust Strip */}
        <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {/* Trust item 1 */}
            <div className="flex flex-col items-center text-center p-2">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-xl sm:text-2xl font-bold text-white font-heading">Since 1985</span>
              </div>
              <span className="text-xs text-slate-300 font-medium">LIC Agency Experience (40+ Yrs)</span>
            </div>

            {/* Trust item 2 */}
            <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5 text-[#FF5A65]" />
                <span className="text-xl sm:text-2xl font-bold text-white font-heading">Since 2019</span>
              </div>
              <span className="text-xs text-slate-300 font-medium">Real Estate Ventures Promoter</span>
            </div>

            {/* Trust item 3 */}
            <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
              <div className="flex items-center gap-2 mb-1">
                <Building className="w-5 h-5 text-blue-300" />
                <span className="text-xl sm:text-2xl font-bold text-white font-heading">6+ Leaders</span>
              </div>
              <span className="text-xs text-slate-300 font-medium">Channel Partner Networks</span>
            </div>

            {/* Trust item 4 */}
            <div className="flex flex-col items-center text-center p-2 pt-4 sm:pt-2">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-xl sm:text-2xl font-bold text-white font-heading">TN & BLR</span>
              </div>
              <span className="text-xs text-slate-300 font-medium">Madurai &bull; Chennai &bull; Bangalore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
