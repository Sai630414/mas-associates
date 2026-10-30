import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 bg-red-100 text-[#E51B27] rounded-full flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="text-4xl font-extrabold font-heading text-[#092C68] block">404</span>
          <h1 className="text-xl font-bold text-slate-800 mt-1">Page Not Found</h1>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            The page or project venture you requested could not be located.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#092C68] hover:bg-[#0864C5] text-white py-3 px-4 rounded-xl text-xs font-semibold shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/projects"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-4 rounded-xl text-xs font-semibold transition-colors"
          >
            <span>Browse Ventures</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
