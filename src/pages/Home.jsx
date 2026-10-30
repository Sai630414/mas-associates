import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Building2, 
  Users, 
  FileCheck2, 
  Compass, 
  ArrowRight, 
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Plane,
  HeartPulse,
  Globe
} from 'lucide-react';
import Hero from '../components/Hero';
import TestimonialSection from '../components/TestimonialSection';
import { PrimaryButton, SecondaryButton, TextLinkButton } from '../components/Buttons';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Home() {

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "Extensive Professional Experience",
      desc: "Over 40 years of financial and policy guidance with LIC of India since 1985, paired with active venture promotion since 2019."
    },
    {
      icon: Building2,
      title: "Multiple Project Associations",
      desc: "Direct executive associations with leading developers: VIP City, SSLY City, DREAM CITY, GVN HOMES, and Metro Homes."
    },
    {
      icon: Users,
      title: "Personalised Customer Guidance",
      desc: "One-on-one consultation with founder Mr. Suthanthira Marimuthu A. to understand your specific investment capacity and needs."
    },
    {
      icon: Compass,
      title: "Property Selection Assistance",
      desc: "Honest evaluation of site topography, approach roads, ground water potential, and realistic corridor growth trends."
    },
    {
      icon: MapPin,
      title: "Tamil Nadu & Bangalore Presence",
      desc: "Active operational base in Bangalore with strong native network and roots across Madurai, Dindigul, and Chennai."
    },
    {
      icon: TrendingUp,
      title: "Long-Term Customer Relationships",
      desc: "We prioritize enduring client trust and safety over quick sales, ensuring transparent paperwork and ethical dealings."
    }
  ];

  const threeDivisions = [
    {
      id: "real-estate",
      division: "REAL ESTATE",
      headline: "Find the Right Land for Your Future",
      description: "Residential plots, ventures, property guidance and site visits across Madurai, Dindigul, Chennai, and Bangalore.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
      icon: Building2,
      accentColor: "#092C68",
      points: [
        "Residential plots & layout developments",
        "Direct venture & channel partnerships",
        "Personalised founder site visits"
      ],
      ctaLabel: "Explore Properties",
      ctaLink: "/projects"
    },
    {
      id: "insurance",
      division: "INSURANCE",
      headline: "Protection and Guidance You Can Trust",
      description: "LIC, United India Insurance and Galaxy Health Insurance advisory with 40+ years of dedicated service.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
      icon: ShieldCheck,
      accentColor: "#0864C5",
      points: [
        "LIC life insurance & retirement planning",
        "United India non-life & asset protection",
        "Galaxy health insurance guidance"
      ],
      ctaLabel: "Enquire About Insurance",
      ctaLink: "/insurance"
    },
    {
      id: "travel",
      division: "TRAVEL SERVICES",
      headline: "Travel Across India and Beyond",
      description: "Domestic and international flight ticket booking assistance with personalized itinerary support.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80",
      icon: Plane,
      accentColor: "#E51B27",
      points: [
        "Domestic flight tickets across India",
        "International worldwide flight assistance",
        "One-way, round-trip & group bookings"
      ],
      ctaLabel: "Book a Flight",
      ctaLink: "/flight-booking"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Three Core Business Divisions Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EEF4FD] text-[#0864C5] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E51B27]" />
            Comprehensive Business Verticals
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092C68] tracking-tight">
            Three Pillars of Professional Excellence
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dedicated assistance in land investments, policyholder insurance security, and seamless air travel.
          </p>
        </div>

        {/* 3 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {threeDivisions.map((div) => {
            const Icon = div.icon;
            return (
              <div
                key={div.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Division Image with Overlay */}
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                    <img
                      src={div.image}
                      alt={div.division}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061838]/85 via-black/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-[#092C68]/95 backdrop-blur-md text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-md uppercase border border-white/10">
                      <Icon className="w-3.5 h-3.5 text-[#E51B27]" />
                      <span>{div.division}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-extrabold text-xl text-[#092C68] group-hover:text-[#0864C5] transition-colors mb-2">
                      {div.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {div.description}
                    </p>

                    {/* Key Points */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {div.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0">
                  <PrimaryButton to={div.ctaLink} className="w-full justify-center">
                    {div.ctaLabel}
                  </PrimaryButton>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. About MAS ASSOCIATES Overview */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#EEF4FD] text-[#0864C5] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#E51B27]" />
                About MAS ASSOCIATES
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092C68] tracking-tight">
                Integrity in Land Investments &amp; Decades of Protection
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                MAS ASSOCIATES was founded with a singular commitment: to provide transparent, risk-free property guidance, reliable insurance advisory, and personalized flight travel services to individuals and families across South India and beyond.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Led by <strong className="text-slate-900">{COMPANY_INFO.founder.name}</strong>, who has proudly served as an LIC of India Agent since <span className="text-[#092C68] font-bold">27 July 1985</span> and a plotted venture promoter since <span className="text-[#E51B27] font-bold">2019</span>, our enterprise helps customers make confident decisions backed by personal accountability.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-[#F6F8FC] border border-slate-200 text-center">
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#092C68] block">40+ Yrs</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block font-medium">LIC Trust</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F6F8FC] border border-slate-200 text-center">
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#E51B27] block">Since 2019</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block font-medium">Venture Promoter</span>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F6F8FC] border border-slate-200 text-center">
                  <span className="text-xl sm:text-2xl font-bold font-heading text-[#0864C5] block">Air Travel</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block font-medium">Ticket Booking</span>
                </div>
              </div>

              <div className="pt-2">
                <PrimaryButton to="/about">
                  Discover Our Story
                </PrimaryButton>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                  alt="MAS ASSOCIATES Venture Plots Development"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061838]/90 via-[#061838]/30 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                  <span className="bg-[#E51B27] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider w-max mb-2">
                    Professional Ethics
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-heading">
                    &ldquo;Real estate is not just about land; it is about building security for your children.&rdquo;
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    &mdash; Mr. Suthanthira Marimuthu A., Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us? Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#EEF4FD] text-[#0864C5] text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-[#E51B27]" />
            Core Values &amp; Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092C68] tracking-tight">
            Why Partner with MAS ASSOCIATES?
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            A combination of professional stability, channel network strength, and genuine customer care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#EEF4FD] text-[#0864C5] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#092C68] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Testimonials Section (Clearly labeled sample previews) */}
      <TestimonialSection />
    </div>
  );
}
