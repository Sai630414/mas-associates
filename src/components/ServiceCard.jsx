import React from 'react';
import { ShieldCheck, Building2, HeartPulse, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/companyInfo';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Building2: Building2,
  HeartPulse: HeartPulse,
};

export default function ServiceCard({ service, isFeatured = false }) {
  const IconComponent = iconMap[service.icon] || ShieldCheck;

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
        isFeatured
          ? 'bg-gradient-to-b from-white to-[#F0F5FD] border-[#0864C5]/30 shadow-xl ring-2 ring-[#0864C5]/20'
          : 'bg-white border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1'
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
            style={{ backgroundColor: `${service.accentColor}15`, color: service.accentColor }}
          >
            <IconComponent className="w-7 h-7" />
          </div>

          <span
            className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            style={{ backgroundColor: `${service.accentColor}15`, color: service.accentColor }}
          >
            {service.badge}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="font-heading font-extrabold text-xl text-[#092C68] mb-1">
          {service.name}
        </h3>
        <p className="text-xs font-semibold text-[#0864C5] mb-4">
          {service.tagline}
        </p>

        {/* Experience highlight pill */}
        <div className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-lg text-xs font-medium text-slate-700 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>{service.experienceHighlight}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature list */}
        <div className="space-y-2.5 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            Advisory Scope
          </span>
          {service.features.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions & Disclaimer */}
      <div>
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
          <a
            href={getWhatsAppUrl(service.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-4 rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-slate-400 italic mt-3 leading-normal">
          {service.disclaimer}
        </p>
      </div>
    </div>
  );
}
