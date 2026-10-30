import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Layers, 
  ShieldAlert, 
  Sparkles, 
  FileText,
  Search,
  RotateCcw
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ProjectFilters from '../components/ProjectFilters';
import BrochureSection from '../components/BrochureSection';
import { PROJECTS, PROJECT_CATEGORIES, PROJECT_LOCATIONS } from '../data/projects';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [sortBy, setSortBy] = useState('default');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((proj) => {
      // Search by title or overview
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.locationDisplay.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by category
      const matchesCategory =
        selectedCategory === 'All Categories' || proj.category === selectedCategory;

      // Filter by city/location
      const matchesLocation =
        selectedLocation === 'All Locations' || proj.city === selectedLocation;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchQuery, selectedCategory, selectedLocation]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Categories');
    setSelectedLocation('All Locations');
    setSortBy('default');
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wider border border-white/10">
              <Building2 className="w-3.5 h-3.5 text-[#FF5A65]" />
              Venture Discovery &bull; Tamil Nadu &amp; Bangalore
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight">
              Our Promoted Plotted Projects
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Discover residential plots, layout ventures, and gated communities promoted through our verified regional channel networks in Madurai, Dindigul, Chennai, and Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Statutory Notice / Demo Data Disclaimer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-4 sm:p-5 shadow-xs text-xs sm:text-sm text-amber-950 flex flex-col sm:flex-row items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 leading-relaxed">
            <span className="font-bold text-amber-900 block text-xs uppercase tracking-wider">
              Statutory Transparency &amp; Showcase Notice
            </span>
            <p>
              The listings below are presented as <strong>&ldquo;Demo Listing – Details Awaited&rdquo;</strong> for layout presentation and regional inquiries. We adhere to rigorous disclosure norms and do not claim unverified statutory approvals, DTCP numbers, or pricing until formally sanctioned and verified in writing. Contact us directly for active inventory and legal verification dossiers.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          resetFilters={resetFilters}
          totalResults={filteredProjects.length}
        />

        {/* Results Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-[#092C68]">
              No Matching Projects Found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We couldn&rsquo;t find any ventures matching your exact filter criteria. Try adjusting your city or category selection.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 bg-[#092C68] hover:bg-[#0864C5] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </section>

      {/* Brochure Request Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrochureSection />
      </section>
    </div>
  );
}
