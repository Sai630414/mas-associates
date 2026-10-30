import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  HeartHandshake, 
  Eye, 
  Sparkles,
  Plane
} from 'lucide-react';

export default function About() {
  const keyDivisions = [
    {
      title: "Real Estate Plots & Ventures",
      desc: "Residential layout promotion, site visit arrangements, and plot selection guidance across Madurai, Dindigul, Chennai, and Bangalore.",
      icon: Building2,
      points: ["Clear title verifications", "On-ground site demarcations", "Verified approach roads"]
    },
    {
      title: "Insurance Advisory Services",
      desc: "Life, health, and non-life advisory under authorized agency arrangements with LIC of India, United India Insurance, and Galaxy Health Insurance.",
      icon: ShieldCheck,
      points: ["Life & retirement plans", "Commercial & motor assets", "Comprehensive health coverage"]
    },
    {
      title: "Air Travel Ticket Assistance",
      desc: "Personalised itinerary planning, fare evaluations, and domestic & international flight ticket booking assistance.",
      icon: Plane,
      points: ["Pan-India domestic flights", "Worldwide international travel", "One-way, round-trip & group trips"]
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-navy rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0864C5]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E51B27]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E51B27]" />
              Enterprise Profile &amp; Heritage
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              About MAS ASSOCIATES
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              A trusted multi-vertical enterprise providing verified plotted real estate layouts across Tamil Nadu &amp; Bangalore, seasoned life and general insurance advisory serving patrons since 1985, and personalized domestic and international flight ticket booking assistance.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Three Business Pillars */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#EEF4FD] text-[#0864C5] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E51B27]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092C68] tracking-tight">
              Three Dedicated Service Verticals
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Integrated solutions designed to protect your capital, grow your wealth, and assist your travels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyDivisions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F6F8FC] rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs text-[#0864C5] flex items-center justify-center mb-5 border border-slate-100">
                      <Icon className="w-6 h-6 text-[#092C68]" />
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-[#092C68] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    <div className="space-y-2 pt-3 border-t border-slate-200/80">
                      {item.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Business Philosophy: Trust, Transparency & Long-Term Relationships */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-[#092C68] tracking-tight">
            Our Business Philosophy
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            The core values guiding every land transaction, insurance portfolio, and travel itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0864C5] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#092C68] mb-2">
                1. Uncompromising Trust
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Trust is earned over decades, not overnight. We never rush a client into an unverified venture or misrepresent approval timelines.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E51B27] flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#092C68] mb-2">
                2. Absolute Transparency
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear pricing, honest boundary demarcation, verifiable patta/title trails, and clear disclosure of legal status before a single rupee is committed.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#092C68] mb-2">
                3. Long-Term Relationships
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our clients remain our patrons for life. From life insurance maturity to family plot inheritance, we stand beside you for decades to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
