import React from 'react';
import { Search, Filter, RotateCcw, MapPin, Layers } from 'lucide-react';
import { PROJECT_CATEGORIES, PROJECT_LOCATIONS } from '../data/projects';

export default function ProjectFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  resetFilters,
  totalResults
}) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-slate-200 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search by project name */}
        <div className="relative">
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
            Search Project
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by venture name..."
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] focus:border-transparent bg-slate-50/50"
            />
          </div>
        </div>

        {/* Filter by city/location */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#E51B27]" />
            Location / City
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] focus:border-transparent bg-slate-50/50 text-slate-700"
          >
            {PROJECT_LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by category */}
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-[#0864C5]" />
            Property Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0864C5] focus:border-transparent bg-slate-50/50 text-slate-700"
          >
            {PROJECT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Reset & Status Summary */}
        <div className="flex flex-col justify-end">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-slate-500">
              Showing <strong className="text-[#092C68] font-bold">{totalResults}</strong> ventures
            </span>
            <button
              onClick={resetFilters}
              type="button"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#E51B27] hover:bg-red-50 border border-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
