import React from 'react';
import { Quote, Star, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#F6F8FC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5 text-[#0864C5]" />
            Client Relationship Philosophy
          </div>
          <h2 className="text-3xl font-extrabold text-[#092C68] tracking-tight">
            Built on Four Decades of Trust
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Our relationship with clients spans across generations, rooted in transparent consultations and long-term financial security.
          </p>

          {/* Explicit Transparency Notice */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-lg text-xs text-amber-800">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Sample demo layout preview &bull; Verified customer reviews will be added after written consent.</span>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80 flex flex-col justify-between relative hover:shadow-md transition-shadow"
            >
              <div>
                {/* Sample Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">
                    Sample Preview
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#0864C5]/20 mb-2" />
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-heading font-bold text-sm text-[#092C68]">
                  {item.name}
                </h4>
                <p className="text-xs text-slate-500">
                  {item.role} &bull; {item.location}
                </p>
                <span className="text-[10px] font-semibold text-[#0864C5] mt-1 block">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
