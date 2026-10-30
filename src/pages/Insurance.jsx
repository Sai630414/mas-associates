import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  HeartPulse, 
  Award, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  FileText, 
  AlertCircle, 
  Clock, 
  Lock 
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { INSURANCE_SERVICES } from '../data/services';
import { COMPANY_INFO, getWhatsAppUrl } from '../data/companyInfo';

export default function Insurance() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-navy rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0864C5]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Official Advisory Representation
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Insurance Advisory Services
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Ethical guidance, policy portfolio reviews, and family risk protection spearheaded by <strong className="text-white font-semibold">{COMPANY_INFO.founder.name}</strong>.
            </p>

            {/* Prominent Golden Trust Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-2xl shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center font-bold text-xl font-heading shadow-md shrink-0">
                  40+
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold text-amber-300 tracking-wider block">
                    Continuous Dedication
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white">
                    Experienced LIC Agent &ndash; Serving Customers Since 27 July 1985
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Regulatory Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 sm:p-5 text-xs text-blue-950 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed space-y-1">
            <span className="font-bold text-blue-900 uppercase tracking-wider text-xs block">
              Insurance Regulatory &amp; Solicitation Disclosure
            </span>
            <p>
              Insurance is the subject matter of solicitation. MAS ASSOCIATES provides advisory guidance to help individuals assess suitable coverage. All policy guarantees, coverage limits, bonuses, surrender values, underwriting approvals, and claims settlements are strictly governed by the official rules and prospectuses of the respective insurance corporations (LIC of India, United India Insurance Co. Ltd., and Galaxy Health Insurance).
            </p>
          </div>
        </div>
      </section>

      {/* Three Prominent Insurance Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-extrabold text-[#092C68] tracking-tight">
            Comprehensive Life, Asset &amp; Health Protection
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Select a service category below to learn more or initiate a personalized policy review.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSURANCE_SERVICES.map((srv, idx) => (
            <ServiceCard key={srv.id} service={srv} isFeatured={idx === 0} />
          ))}
        </div>
      </section>

      {/* Detailed Advisory Methodology */}
      <section className="bg-white py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FD] text-[#0864C5] text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-[#E51B27]" />
                Four Decades of Advisory
              </div>

              <h2 className="text-3xl font-extrabold text-[#092C68] tracking-tight">
                Why Experienced Consultation Matters for Insurance
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Purchasing an insurance policy online without examining fine print, family income liability, or hospital network restrictions can leave policyholders vulnerable during medical emergencies or claim settlements.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3 bg-[#F6F8FC] rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-heading">Personalized Family Need Analysis:</strong>
                    <span>We calculate human life value (HLV) to guarantee dependents are genuinely protected against uncertainties.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#F6F8FC] rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-heading">Documentation &amp; Maturity Guidance:</strong>
                    <span>Continuous assistance with nomination updates, premium reminders, address changes, and policy maturity payouts.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#F6F8FC] rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-heading">Complete Claim &amp; Settlement Support:</strong>
                    <span>Hands-on advisory when filing paperwork with United India Insurance or processing LIC maturity and claims.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance Enquiry Form (6 cols) */}
            <div className="lg:col-span-6">
              <ContactForm
                defaultService="LIC Life &amp; United India General Insurance Advisory"
                isSiteVisit={false}
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
