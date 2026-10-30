import React, { useState } from 'react';
import { 
  Plane, 
  Globe, 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Send, 
  AlertCircle,
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { PrimaryButton, SecondaryButton, WhatsAppButtonUI, ContactButton } from '../components/Buttons';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyInfo';
import { FLIGHT_SERVICES } from '../data/services';

export default function FlightBooking() {
  const [tripType, setTripType] = useState('one-way'); // 'one-way' | 'round-trip'
  const [travelType, setTravelType] = useState('Domestic'); // 'Domestic' | 'International'
  
  const [formData, setFormData] = useState({
    passengerName: '',
    mobileNumber: '',
    departureCity: '',
    destinationCity: '',
    departureDate: '',
    returnDate: '',
    passengersCount: '1',
    travelClass: 'Economy',
    additionalRequirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.passengerName.trim()) {
      setErrorMsg('Please enter passenger name.');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.departureCity.trim() || !formData.destinationCity.trim()) {
      setErrorMsg('Please enter departure and destination cities.');
      return;
    }
    if (!formData.departureDate) {
      setErrorMsg('Please select your departure date.');
      return;
    }
    if (tripType === 'round-trip' && !formData.returnDate) {
      setErrorMsg('Please select your return date for round trip.');
      return;
    }

    const waMsg = `Hello MAS ASSOCIATES, I would like assistance with flight ticket booking.\n\n` +
      `• Passenger Name: ${formData.passengerName}\n` +
      `• Mobile: ${formData.mobileNumber}\n` +
      `• Sector: ${formData.departureCity} ✈ ${formData.destinationCity} (${travelType})\n` +
      `• Trip Type: ${tripType === 'round-trip' ? 'Round Trip' : 'One Way'}\n` +
      `• Departure Date: ${formData.departureDate}\n` +
      (tripType === 'round-trip' ? `• Return Date: ${formData.returnDate}\n` : '') +
      `• Passengers: ${formData.passengersCount} | Class: ${formData.travelClass}\n` +
      (formData.additionalRequirements ? `• Notes: ${formData.additionalRequirements}\n` : '') +
      `\nPlease contact me with available options and fares.`;

    window.open(getWhatsAppUrl(waMsg), '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Aviation Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#061838] min-h-[460px] flex items-center">
          {/* Background Aviation Photography */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80"
              alt="MAS ASSOCIATES Flight Travel Assistance"
              className="w-full h-full object-cover object-center"
            />
            {/* Architectural Navy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061838] via-[#092C68]/90 to-[#0864C5]/75" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-16 max-w-3xl space-y-5 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider">
              <Plane className="w-3.5 h-3.5 text-[#E51B27]" />
              <span>Third Business Vertical &bull; Travel Assistance</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Your Journey Begins With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">MAS ASSOCIATES</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              Domestic and international flight booking assistance, with personalised support for your travel plans.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-200 bg-white/10 px-3 py-1.5 rounded-md border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Domestic India Routes
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-200 bg-white/10 px-3 py-1.5 rounded-md border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                International Sectors
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-200 bg-white/10 px-3 py-1.5 rounded-md border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Group &amp; Family Bookings
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Enquiry Section (Form + Information) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-md">
            <div className="border-b border-slate-100 pb-5 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <span className="text-xs font-bold text-[#E51B27] uppercase tracking-wider block">
                    Travel Desk Enquiry
                  </span>
                  <h2 className="text-2xl font-bold font-heading text-[#092C68] mt-0.5">
                    Request Flight Booking Assistance
                  </h2>
                </div>

                {/* Domestic / International Toggle */}
                <div className="inline-flex p-1 bg-slate-100 rounded-lg text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setTravelType('Domestic')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      travelType === 'Domestic' ? 'bg-[#092C68] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Domestic
                  </button>
                  <button
                    type="button"
                    onClick={() => setTravelType('International')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      travelType === 'International' ? 'bg-[#092C68] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    International
                  </button>
                </div>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2 mb-4">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Trip Type Selector */}
            <div className="flex gap-4 mb-5">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-800 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="one-way"
                  checked={tripType === 'one-way'}
                  onChange={() => setTripType('one-way')}
                  className="w-4 h-4 text-[#092C68] focus:ring-[#0864C5]"
                />
                <span>One Way</span>
              </label>

              <label className="flex items-center gap-2 text-xs font-semibold text-slate-800 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="round-trip"
                  checked={tripType === 'round-trip'}
                  onChange={() => setTripType('round-trip')}
                  className="w-4 h-4 text-[#092C68] focus:ring-[#0864C5]"
                />
                <span>Round Trip</span>
              </label>
            </div>

            {/* Main Form */}
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Passenger Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Passenger Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="passengerName"
                    required
                    value={formData.passengerName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="+91 94430 00000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Passengers Count */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#0864C5]" />
                  Number of Passengers
                </label>
                <select
                  name="passengersCount"
                  value={formData.passengersCount}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50/50 text-slate-700"
                >
                  <option value="1">1 Passenger (Solo)</option>
                  <option value="2">2 Passengers</option>
                  <option value="3-5">3 to 5 Passengers (Family)</option>
                  <option value="6-9">6 to 9 Passengers</option>
                  <option value="10+">10+ Passengers (Group Travel)</option>
                </select>
              </div>

              {/* Departure & Destination Cities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#0864C5]" />
                    Departure City / Airport <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="departureCity"
                    required
                    value={formData.departureCity}
                    onChange={handleChange}
                    placeholder="e.g. Bangalore (BLR) or Madurai (IXM)"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E51B27]" />
                    Destination City / Airport <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="destinationCity"
                    required
                    value={formData.destinationCity}
                    onChange={handleChange}
                    placeholder="e.g. Delhi (DEL), Dubai (DXB), London (LHR)"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Dates & Travel Class */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Departure Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="departureDate"
                    required
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50/50 text-slate-700"
                  />
                </div>

                {tripType === 'round-trip' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                      Return Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      required={tripType === 'round-trip'}
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50/50 text-slate-700"
                    />
                  </div>
                )}

                <div className={tripType === 'round-trip' ? 'sm:col-span-1' : 'sm:col-span-2'}>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                    Travel Class
                  </label>
                  <select
                    name="travelClass"
                    value={formData.travelClass}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50/50 text-slate-700"
                  >
                    <option value="Economy">Economy Class</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business">Business Class</option>
                    <option value="First Class">First Class</option>
                  </select>
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  name="additionalRequirements"
                  rows={2}
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  placeholder="Preferred airline, specific departure timing, extra baggage allowance, senior citizen assistance..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] bg-slate-50/50"
                />
              </div>

              {/* Form Actions */}
              <div className="pt-2">
                <WhatsAppButtonUI
                  onClick={handleWhatsAppSubmit}
                  className="w-full justify-center"
                >
                  Request Flight Options on WhatsApp (+91 94430 64943)
                </WhatsAppButtonUI>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-[11px] text-slate-500 leading-relaxed mt-2">
                <strong className="text-slate-700">Notice:</strong> This is an enquiry-based flight assistance service. We verify real-time schedules, baggage rules, and best promotional fares through authorized channels before sharing options for your confirmation.
              </div>
            </form>
          </div>

          {/* Right Column: Travel Services & Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Services List Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-heading font-bold text-base text-[#092C68] flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#E51B27]" />
                Flight Booking Assistance Services
              </h3>

              <div className="space-y-3">
                {FLIGHT_SERVICES.map((srv) => (
                  <div key={srv.id} className="p-3 rounded-lg bg-[#F6F8FC] border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0864C5] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#092C68]">{srv.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{srv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Travel Desk Assistance */}
            <div className="bg-gradient-to-br from-[#092C68] to-[#061838] text-white rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Dedicated Travel Desk</span>
              </div>

              <h4 className="font-heading font-bold text-lg text-white">
                Personalized Route &amp; Fare Support
              </h4>

              <p className="text-xs text-slate-200 leading-relaxed">
                Connect directly with Mr. Suthanthira Marimuthu A. and the MAS ASSOCIATES travel assistance team for urgent flights, group bookings, or multi-city itineraries.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-colors"
                >
                  <span>Primary Desk: {COMPANY_INFO.contact.primaryPhone}</span>
                  <span className="text-[10px] text-emerald-300">Call Now &rarr;</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.contact.secondaryPhoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-colors"
                >
                  <span>Alternative Desk: {COMPANY_INFO.contact.secondaryPhone}</span>
                  <span className="text-[10px] text-blue-300">Call Alt &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
