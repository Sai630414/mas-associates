import React, { useState } from 'react';
import { FileText, Download, MessageCircle, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyInfo';

export default function BrochureSection({ projectName = '' }) {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [targetProject, setTargetProject] = useState(projectName || 'All Active Venture Layouts');
  const [statusMsg, setStatusMsg] = useState('');

  const handleRequestBrochureWhatsApp = (e) => {
    e.preventDefault();
    if (!userName.trim() || !userPhone.trim()) {
      setStatusMsg('Please provide your name and phone number to request brochures.');
      return;
    }
    const msg = `Hello MAS ASSOCIATES, I am interested in your property projects (${targetProject}). My name is ${userName} (Phone: ${userPhone}). Please share the available project brochures and details.`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-[#092C68] to-[#061838] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0864C5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Information (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider border border-white/10">
            <FileText className="w-3.5 h-3.5 text-[#E51B27]" />
            Official Documentation &amp; Profiles
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            Download or Request Official Venture Brochures
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
            Get comprehensive layout maps, tentative plot allocations, and developer profile notes. Request direct PDF copies delivered to your WhatsApp.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full Venture Layout Plans</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Developer Channel Partner Profiles</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Road Demarcations &amp; Amenities</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Guidance on Approval Sanctions</span>
            </div>
          </div>
        </div>

        {/* Right Column: Request Card (5 cols) */}
        <div className="lg:col-span-5 bg-white text-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-100">
          <h4 className="font-heading font-bold text-base text-[#092C68] mb-1">
            Request Project Brochure
          </h4>
          <p className="text-xs text-slate-500 mb-4">
            Enter your details to generate a prefilled WhatsApp request.
          </p>

          {statusMsg && (
            <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-1.5 mb-3">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{statusMsg}</span>
            </div>
          )}

          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="e.g. Ramesh Babu"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                WhatsApp / Mobile Number
              </label>
              <input
                type="tel"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                placeholder="+91 94430 00000"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50"
              />
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleRequestBrochureWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-lg text-xs font-heading font-semibold border-b-2 border-emerald-700 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Receive Brochure on WhatsApp (+91 94430 64943)</span>
              </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center pt-1 leading-snug">
              Official brochures are dispatched directly via WhatsApp by MAS ASSOCIATES.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
