import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { CommercialProjects } from './components/CommercialProjects';
import { InternalInitiatives } from './components/InternalInitiatives';
import { EducationalPrograms } from './components/EducationalPrograms';
import { FooterClause } from './components/FooterClause';
import { DeckModal } from './components/DeckModal';
import { Toast } from './components/Toast';
import { PortfolioProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f7f8f9] text-[#222222] flex flex-col selection:bg-neutral-200">
      {/* Top Utility Bar (Hidden during print) */}
      <TopBar onCopyNotice={showToast} />

      {/* Main Single-Column Document Container */}
      <main className="flex-1 w-full flex justify-center px-0 sm:px-4 py-0 sm:py-6 md:py-8">
        <article
          id="portfolio-document"
          className="print-container w-full max-w-[840px] bg-white px-6 py-8 sm:px-12 sm:py-12 md:px-16 md:py-14 sm:rounded-xl sm:border sm:border-neutral-200/80 sm:shadow-[0_2px_18px_rgba(0,0,0,0.04)] transition-all flex flex-col"
        >
          {/* Header (Title, Role, Contact, Bio) */}
          <Header onCopyNotice={showToast} />

          {/* Section 1: Commercial Data Experience Projects */}
          <CommercialProjects onSelectProject={setSelectedProject} />

          {/* Section 2: Organizations Internal Data Experience Initiatives */}
          <InternalInitiatives onCopyNotice={showToast} />

          {/* Section 3: Personal Worldwide Educational and Mentoring Programs */}
          <EducationalPrograms onCopyNotice={showToast} />

          {/* Footer Clause (GDPR Consent) */}
          <FooterClause />
        </article>
      </main>

      {/* Presentation Deck Modal */}
      <DeckModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onCopyNotice={showToast}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
