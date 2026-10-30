export const COMPANY_INFO = {
  name: "MAS ASSOCIATES",
  tagline: "Your Trusted Partner in Land, Investments & Insurance",
  subTagline: "Discover promising plots and residential ventures across Tamil Nadu and Bangalore with experienced professional guidance.",
  founder: {
    name: "Mr. Suthanthira Marimuthu A.",
    designation: "Founder & Managing Director",
    native: "Madurai, Tamil Nadu",
    currentBase: "Bangalore, Karnataka",
    operations: "Tamil Nadu & Bangalore",
    roles: [
      { role: "Zonal Head", company: "VIP City Housing and Properties" },
      { role: "Director", company: "SSLY City" },
      { role: "Channel Partner", company: "DREAM CITY, Dindigul" },
      { role: "Channel Partner", company: "GVN HOMES, Chennai" },
      { role: "Business Development Manager", company: "METRO HOMES, Bangalore" },
      { role: "Channel Partner & Advisor", company: "Associated with prominent regional plot promoters" }
    ],
    experience: {
      licSince: "27/07/1985",
      licYears: "40+ Years",
      realEstateSince: "2019",
      insuranceAgencies: [
        "Life Insurance Corporation of India (LIC) - Active since 27/07/1985",
        "United India Insurance Co. Ltd. - General Insurance Advisor",
        "Galaxy Health Insurance - Comprehensive Healthcare Protection Advisor"
      ]
    },
    bio: "With over 40 years of financial trust as a veteran LIC of India agent and an active promoter of residential plotted developments across Tamil Nadu and Bangalore since 2019, Mr. Suthanthira Marimuthu A. stands for ethical guidance, absolute transparency, and long-standing client relationships."
  },
  contact: {
    primaryPhone: "+91 94430 64943",
    primaryPhoneRaw: "+919443064943",
    secondaryPhone: "+91 98846 87943",
    secondaryPhoneRaw: "+919884687943",
    whatsappNumber: "919443064943",
    email: "lic.uiic.masmarimuthu@gmail.com",
    locations: [
      {
        city: "Bangalore",
        state: "Karnataka",
        type: "Current Operational Base",
        address: "Bangalore, Karnataka, India"
      },
      {
        city: "Madurai",
        state: "Tamil Nadu",
        type: "Native & Regional Hub",
        address: "Madurai, Tamil Nadu, India"
      }
    ],
    operatingRegions: ["Madurai", "Dindigul", "Chennai", "Bangalore", "Tamil Nadu Regions"],
    businessHours: "Monday – Saturday: 9:00 AM – 7:30 PM (Sunday by Appointment)"
  },
  stats: [
    { label: "Insurance Trust", value: "40+ Years", desc: "Serving clients since 1985" },
    { label: "Venture Promotion", value: "Since 2019", desc: "Trusted plotted communities" },
    { label: "Key Partnerships", value: "6+ Leaders", desc: "VIP City, SSLY, Metro Homes & more" },
    { label: "Regional Reach", value: "TN & Bangalore", desc: "Madurai, Chennai, Dindigul, BLR" }
  ]
};

export const getWhatsAppUrl = (customMessage = "") => {
  const defaultMsg = "Hello MAS ASSOCIATES, I would like to enquire about your property plots, insurance advisory, and flight booking services.";
  const msg = customMessage || defaultMsg;
  return `https://wa.me/${COMPANY_INFO.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};
