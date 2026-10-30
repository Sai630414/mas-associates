import React, { useState } from 'react';
import { ShieldCheck, Award, MapPin, Building, Briefcase, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyInfo';
import { WhatsAppButtonUI, ContactButton } from './Buttons';

export default function FounderSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FD] text-[#0864C5] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-[#E51B27]" />
            Leadership & Stewardship
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092C68] tracking-tight">
            Meet Our Founder: <span className="text-[#E51B27]">Mr. Suthanthira Marimuthu A.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Four decades of financial advisory integrity blended with proactive plotted layout promotion across Tamil Nadu and Bangalore.
          </p>
        </div>

        {/* Founder Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Founder Video & Quick Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Executive Leadership Showcase Card */}
            <div className="bg-gradient-to-br from-[#092C68] to-[#061838] rounded-3xl p-6 sm:p-8 text-white shadow-xl border-4 border-white ring-1 ring-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0864C5]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E51B27]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                    <Award className="w-4 h-4 text-[#E51B27]" />
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-200">Executive Leadership</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-300">Est. 1985</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs uppercase tracking-widest text-[#FF5A65] font-bold">
                    Founder &amp; Managing Director
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                    Mr. Suthanthira Marimuthu A.
                  </h3>
                  <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                    Steward of MAS ASSOCIATES with four decades of client-centric financial guidance and ethical property ventures.
                  </p>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0864C5] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      LIC
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">LIC of India Agent Since 1985</span>
                      <span className="text-[11px] text-slate-300">Continuous advisory service since 27/07/1985</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#E51B27] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      RE
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Real Estate Promoter Since 2019</span>
                      <span className="text-[11px] text-slate-300">Plots &amp; ventures across Tamil Nadu &amp; Bangalore</span>
                    </div>
                  </div>
                </div>

                <div className="pt-1 text-center">
                  <span className="text-xs italic text-slate-300">
                    &ldquo;Integrity, Transparency, and Lifelong Customer Dedication.&rdquo;
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Location & Direct Connect Card */}
            <div className="bg-[#F6F8FC] rounded-2xl p-5 border border-slate-200">
              <h4 className="font-heading font-bold text-sm text-[#092C68] mb-3 uppercase tracking-wider">
                Regional Presence
              </h4>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E51B27] shrink-0" />
                  <span><strong>Native:</strong> Madurai, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0864C5] shrink-0" />
                  <span><strong>Current Base:</strong> Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Operations:</strong> Tamil Nadu & Bangalore Metropolitan Region</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Profile, Timeline & Executive Roles (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio paragraph */}
            <div className="prose prose-slate max-w-none">
              <h3 className="text-2xl font-bold text-[#092C68] mb-3">
                A Legacy of Trust, Transparency & Customer Protection
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                {COMPANY_INFO.founder.bio}
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether assessing a residential plot for a family dream home or choosing a long-term insurance and retirement umbrella, Mr. Marimuthu brings unmatched personal oversight, verifying paperwork, accessibility, and real value before recommending any layout.
              </p>
            </div>

            {/* Two Pillars: 1985 & 2019 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pillar 1: LIC Agency */}
              <div className="bg-[#EEF4FD] border border-[#0864C5]/20 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0864C5] text-white flex items-center justify-center font-bold text-sm">
                    1985
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#0864C5] tracking-wider block">
                      Active Agency
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#092C68]">
                      LIC of India Agent
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Serving policyholders continuously since <strong>27/07/1985</strong>. Additionally providing general & health insurance advisory with United India Insurance and Galaxy Health Insurance.
                </p>
              </div>

              {/* Pillar 2: Real Estate Ventures */}
              <div className="bg-red-50 border border-[#E51B27]/20 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#E51B27] text-white flex items-center justify-center font-bold text-sm">
                    2019
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-[#E51B27] tracking-wider block">
                      Promoter & Partner
                    </span>
                    <h4 className="font-heading font-bold text-sm text-[#092C68]">
                      Real Estate Ventures
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active promoter of residential plotted layouts and gated ventures since <strong>2019</strong>, championing customer-centric property selection across key corridors.
                </p>
              </div>
            </div>

            {/* Executive Channel Roles & Institutional Associations */}
            <div>
              <h4 className="font-heading font-bold text-base text-[#092C68] mb-3 flex items-center gap-2">
                <Building className="w-4 h-4 text-[#0864C5]" />
                Professional Roles & Real Estate Associations
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COMPANY_INFO.founder.roles.map((item, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#0864C5]/50 transition-colors shadow-xs flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#092C68] block">
                        {item.role}
                      </span>
                      <span className="text-xs text-slate-600">
                        {item.company}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Consultation CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <WhatsAppButtonUI
                message="Hello Mr. Suthanthira Marimuthu A., I would like to schedule a personal consultation regarding plots, insurance, or travel assistance."
                label="Talk to Our Founder"
              />
              <ContactButton
                href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
                label={COMPANY_INFO.contact.primaryPhone}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
