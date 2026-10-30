import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, MessageCircle, ArrowRight, ShieldAlert, Tag } from 'lucide-react';
import { getWhatsAppUrl } from '../data/companyInfo';

export default function ProjectCard({ project }) {
  const whatsappProjectMsg = `Hello MAS ASSOCIATES, I am enquiring about the project "${project.title}" located in ${project.city}. Please share available plot details.`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Thumbnail with overlay tags */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-[#092C68]/95 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-md">
            <Tag className="w-3 h-3 text-[#FF5A65]" />
            {project.category}
          </span>

          <span className="inline-flex items-center gap-1 bg-amber-500/95 backdrop-blur-md text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md uppercase tracking-wider">
            {project.statusBadge}
          </span>
        </div>

        {/* City tag */}
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#E51B27]" />
            {project.city}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-heading font-bold text-lg text-[#092C68] group-hover:text-[#0864C5] transition-colors line-clamp-1 mb-1.5">
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </h3>

          {/* Location details */}
          <p className="text-xs text-slate-500 flex items-center gap-1 mb-3">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="line-clamp-1">{project.locationDisplay}</span>
          </p>

          {/* Key Specs: Sizes & Price */}
          <div className="grid grid-cols-2 gap-2 bg-[#F6F8FC] p-3 rounded-xl border border-slate-100 text-xs mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Plot Sizes
              </span>
              <span className="font-semibold text-slate-800 flex items-center gap-1 mt-0.5 line-clamp-1">
                <Maximize2 className="w-3 h-3 text-[#0864C5]" />
                {project.sizesDisplay}
              </span>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Pricing
              </span>
              <span className="font-semibold text-slate-700 mt-0.5 block line-clamp-1">
                {project.priceDisplay}
              </span>
            </div>
          </div>

          {/* Short description */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
            {project.overview}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={`/projects/${project.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#092C68] hover:bg-[#0864C5] text-white py-2.5 px-3 rounded-lg text-xs font-heading font-semibold transition-colors border-r-2 border-b-2 border-[#E51B27] group"
          >
            <span>Explore Venture</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF5A65] group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href={getWhatsAppUrl(whatsappProjectMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-lg transition-colors border-b-2 border-emerald-700 shadow-xs"
            title="Enquire on WhatsApp"
            aria-label="Enquire on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
