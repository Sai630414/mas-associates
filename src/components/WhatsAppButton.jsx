import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyInfo';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Mini Chat Prompt Bubble */}
      {showTooltip && (
        <div className="bg-white text-slate-800 p-3.5 rounded-2xl shadow-2xl border border-slate-100 max-w-xs mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-[#092C68]">MAS ASSOCIATES Online</span>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
            Looking for plotted layouts or insurance advice? Speak directly with <strong className="text-slate-800">{COMPANY_INFO.founder.name}</strong> on WhatsApp.
          </p>
          <a
            href={getWhatsAppUrl("Hello MAS ASSOCIATES, I would like immediate assistance regarding your properties/insurance services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white py-1.5 px-3 rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            Start Chat Now
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <a
          href={getWhatsAppUrl("Hello MAS ASSOCIATES, I am interested in your plots and insurance advisory services.")}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Animated ping ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7 fill-white" />
        </a>
      </div>
    </div>
  );
}
