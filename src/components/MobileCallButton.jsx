import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function MobileCallButton() {
  return (
    <div className="md:hidden fixed bottom-6 left-6 z-40">
      <a
        href={`tel:${COMPANY_INFO.contact.primaryPhoneRaw}`}
        className="flex items-center justify-center w-12 h-12 bg-[#092C68] hover:bg-[#0864C5] text-white rounded-full shadow-2xl active:scale-95 transition-all border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-5 h-5 text-white" />
      </a>
    </div>
  );
}
