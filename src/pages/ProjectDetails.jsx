import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Maximize2, 
  Calendar, 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  FileText, 
  ArrowLeft, 
  Play, 
  Tag, 
  Share2, 
  Clock, 
  Compass, 
  AlertCircle 
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import BrochureSection from '../components/BrochureSection';
import { PROJECTS } from '../data/projects';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyInfo';
import { WhatsAppButtonUI, ContactButton } from '../components/Buttons';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(
    project?.images?.[0] || project?.thumbnail || ''
  );
  const [copied, setCopied] = useState(false);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#092C68]">Project Not Found</h2>
        <p className="text-slate-600 text-sm">The venture you are looking for does not exist or has been moved.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-[#092C68] text-white px-5 py-2.5 rounded-xl text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappInquiryText = `Hello MAS ASSOCIATES, I am interested in details and site visit for "${project.title}" (${project.city}). Please share latest plot availability.`;

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Top Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#0864C5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{copied ? 'Link Copied!' : 'Share Venture'}</span>
            </button>

            <a
              href={getWhatsAppUrl(whatsappInquiryText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold shadow-xs hover:bg-[#20ba5a] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Project Overview & Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Gallery & Video (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Active Media */}
            <div className="relative aspect-16/10 rounded-3xl overflow-hidden shadow-xl bg-slate-900 border border-slate-200">
              <img
                src={activeImage}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {project.statusBadge}
                </span>
              </div>

              {/* Category */}
              <div className="absolute top-4 right-4 pointer-events-none">
                <span className="bg-[#092C68]/90 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Thumbnails row */}
            {project.images && project.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {project.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === img
                        ? 'border-[#0864C5] ring-2 ring-blue-200 scale-102'
                        : 'border-slate-200 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Title, Highlights & Quick Specs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0864C5] uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-[#E51B27]" />
                <span>{project.locationDisplay}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#092C68] tracking-tight">
                {project.title}
              </h1>

              <p className="text-xs text-slate-500 mt-1">
                Region: <strong className="text-slate-700">{project.city}, {project.state}</strong>
              </p>
            </div>

            {/* Quick Metrics Card */}
            <div className="bg-[#F6F8FC] rounded-2xl p-5 border border-slate-200 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Plot Sizes
                </span>
                <span className="text-sm font-bold text-[#092C68] flex items-center gap-1.5 mt-1">
                  <Maximize2 className="w-4 h-4 text-[#0864C5]" />
                  {project.sizesDisplay}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Pricing Indication
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1 block">
                  {project.priceDisplay}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Category
                </span>
                <span className="text-xs font-semibold text-slate-700 mt-1 block">
                  {project.category}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                  Status
                </span>
                <span className="text-xs font-semibold text-amber-700 mt-1 block">
                  {project.statusBadge}
                </span>
              </div>
            </div>

            {/* Statutory Compliance / Approval Status Box */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Statutory &amp; Verification Status
              </h4>
              <div className="text-xs text-slate-600 space-y-1">
                <p>
                  <strong>Approval Details:</strong>{' '}
                  {project.isApprovalVerified && project.dtcpApprovalNumber
                    ? `Sanctioned DTCP No: ${project.dtcpApprovalNumber}`
                    : 'Details Awaited / Verification in Progress'}
                </p>
                <p>
                  <strong>RERA Registration:</strong>{' '}
                  {project.isApprovalVerified && project.reraRegistrationNumber
                    ? project.reraRegistrationNumber
                    : 'Verification Dossier Pending Official Release'}
                </p>
              </div>
              <p className="text-[10px] text-slate-400 italic pt-1 leading-normal border-t border-slate-100">
                {project.disclaimer}
              </p>
            </div>

            {/* Quick Consultation CTAs */}
            <div className="space-y-2.5 pt-2 flex flex-col">
              <WhatsAppButtonUI
                href={getWhatsAppUrl(whatsappInquiryText)}
                className="w-full"
              >
                Request a Site Visit
              </WhatsAppButtonUI>

              <ContactButton
                phone={COMPANY_INFO.contact.primaryPhoneRaw}
                className="w-full"
              >
                Talk to Our Team
              </ContactButton>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Amenities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Overview & Amenities (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold font-heading text-[#092C68]">
                Layout &amp; Venture Overview
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold font-heading text-[#092C68] mb-4">
                Planned Amenities &amp; Infrastructure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {project.amenities.map((amenity, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium text-slate-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-xl font-bold font-heading text-[#092C68] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#E51B27]" />
                Location &amp; Accessibility
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Site visits are conducted directly by founder Mr. Suthanthira Marimuthu A. To maintain buyer safety and preserve precise layout survey pegs, exact coordinates and site visit schedules are arranged personally.
              </p>
              <div className="w-full h-48 bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-slate-500 text-xs p-4 text-center">
                <MapPin className="w-8 h-8 text-[#0864C5] mb-2" />
                <span className="font-semibold text-slate-700">{project.locationDisplay}</span>
                <span className="text-[11px] text-slate-400 mt-1">
                  GPS Coordinates &amp; Route Map shared upon confirmed visit booking.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Site Visit & Booking Request Form (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <ContactForm
              defaultProject={project.title}
              defaultService={`Site Visit - ${project.title}`}
              isSiteVisit={true}
            />
          </div>
        </div>
      </section>

      {/* Brochure Request */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrochureSection projectName={project.title} />
      </section>
    </div>
  );
}
