import React from 'react';
import { Header } from './components/Header';
import { CommercialProjects } from './components/CommercialProjects';
import { InternalInitiatives } from './components/InternalInitiatives';
import { EducationalPrograms } from './components/EducationalPrograms';
import { FooterClause } from './components/FooterClause';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f8f9] text-[#222222] flex flex-col selection:bg-neutral-200">
      {/* Main Single-Column Document Container */}
      <main className="flex-1 w-full flex justify-center px-0 sm:px-4 py-4 sm:py-8 md:py-10">
        <article
          id="portfolio-document"
          className="print-container w-full max-w-[840px] bg-white px-6 py-8 sm:px-12 sm:py-12 md:px-16 md:py-14 sm:rounded-xl sm:border sm:border-neutral-200/80 sm:shadow-[0_2px_18px_rgba(0,0,0,0.04)] transition-all flex flex-col"
        >
          {/* Header (Title, Role, Contact, Bio) */}
          <Header />

          {/* Section 1: Commercial Data Experience Projects */}
          <CommercialProjects />

          {/* Section 2: Organizations Internal Data Experience Initiatives */}
          <InternalInitiatives />

          {/* Section 3: Personal Worldwide Educational and Mentoring Programs */}
          <EducationalPrograms />

          {/* Footer Clause (GDPR Consent) */}
          <FooterClause />
        </article>
      </main>
    </div>
  );
}
