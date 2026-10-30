import React, { useState } from 'react';
import { MessageCircle, CheckCircle2, AlertCircle, Phone, User, MapPin } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyInfo';
import { WhatsAppButtonUI } from './Buttons';

export default function ContactForm({
  defaultProject = '',
  defaultService = 'General Real Estate & Plots Enquiry',
  isSiteVisit = false
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interestedProject: defaultProject,
    serviceType: defaultService,
    preferredLocation: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please provide a valid 10-digit mobile contact number.');
      return;
    }

    const waText = `Hello MAS ASSOCIATES, my name is ${formData.name} (Phone: ${formData.phone}). ` +
      `I am interested in ${formData.interestedProject || formData.serviceType}` +
      (formData.preferredLocation ? ` in ${formData.preferredLocation}` : '') + `. ` +
      (formData.message ? `Details: ${formData.message}` : 'Please contact me with available options.');

    window.open(getWhatsAppUrl(waText), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80">
      {submitted ? (
        <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="text-2xl font-bold font-heading text-[#092C68]">
            Enquiry Initiated on WhatsApp!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Your message has been prefilled for MAS ASSOCIATES at <strong className="text-slate-800">{COMPANY_INFO.contact.primaryPhone}</strong>. If your WhatsApp did not open automatically, click below:
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  phone: '',
                  interestedProject: defaultProject,
                  serviceType: defaultService,
                  preferredLocation: '',
                  message: ''
                });
              }}
              className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              Submit Another Enquiry
            </button>
            <a
              href={getWhatsAppUrl(`Hello MAS ASSOCIATES, I am ${formData.name} (Phone: ${formData.phone}). Following up on my web enquiry.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Open WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-b border-slate-100 pb-4 mb-4">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#092C68]">
              {isSiteVisit ? 'Schedule an In-Person Site Visit' : 'Send an Instant Enquiry'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Connect with MAS ASSOCIATES directly for verified venture details, advisory, and site accompaniment.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Senthil Kumar"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] focus:border-transparent bg-slate-50/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                WhatsApp / Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] focus:border-transparent bg-slate-50/50"
                />
              </div>
            </div>
          </div>

          {/* Preferred Location */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
              Preferred Location
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                name="preferredLocation"
                value={formData.preferredLocation}
                onChange={handleChange}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] focus:border-transparent bg-slate-50/50 text-slate-700"
              >
                <option value="">Select Target Region (Optional)</option>
                <option value="Madurai">Madurai Region</option>
                <option value="Dindigul">Dindigul Highway Belt</option>
                <option value="Bangalore">Bangalore Metropolitan Area</option>
                <option value="Chennai">Chennai Suburbs</option>
                <option value="Other Tamil Nadu">Other Tamil Nadu Locations</option>
              </select>
            </div>
          </div>

          {/* Interested Project or Service */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
              Interested Property / Advisory Service
            </label>
            <input
              type="text"
              name="interestedProject"
              value={formData.interestedProject || formData.serviceType}
              onChange={handleChange}
              placeholder="e.g. VIP City Housing, SSLY City, or LIC Advisory"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] focus:border-transparent bg-slate-50/50"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
              Specific Query / Preferred Visit Timing
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what size of plot, flight sector, or type of insurance policy you are looking for..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] focus:border-transparent bg-slate-50/50"
            />
          </div>

          {/* Submission Action */}
          <div className="pt-2">
            <WhatsAppButtonUI
              onClick={handleSubmit}
              className="w-full justify-center"
            >
              {isSiteVisit ? 'Request Site Visit on WhatsApp' : 'Send Enquiry on WhatsApp (+91 94430 64943)'}
            </WhatsAppButtonUI>
          </div>

          <p className="text-[11px] text-slate-400 text-center pt-2">
            Your enquiry is dispatched directly via WhatsApp to <strong>{COMPANY_INFO.contact.primaryPhone}</strong>.
          </p>
        </form>
      )}
    </div>
  );
}
