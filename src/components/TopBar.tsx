import React from 'react';
import { Printer, Mail, Share2, Linkedin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TopBarProps {
  onCopyNotice: (msg: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onCopyNotice }) => {
  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    onCopyNotice('Email pruskopawel@gmail.com copied to clipboard');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onCopyNotice('Portfolio URL copied to clipboard');
    }
  };

  return (
    <header
      id="portfolio-top-bar"
      className="no-print sticky top-0 z-40 w-full backdrop-blur-md bg-[#f7f8f9]/90 border-b border-neutral-200/80 px-4 py-2.5 transition-all"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-neutral-600">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-neutral-700 hidden sm:inline">Web Portfolio View</span>
          <span className="text-neutral-400 hidden sm:inline">•</span>
          <span className="text-neutral-500 font-normal">Paweł Prusko</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            id="top-bar-copy-email-btn"
            onClick={handleCopyEmail}
            title="Copy email address"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-neutral-500" />
            <span className="hidden md:inline">Copy Email</span>
          </button>

          <a
            id="top-bar-linkedin-link"
            href={PERSONAL_INFO.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open LinkedIn Profile"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors cursor-pointer"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>

          <button
            id="top-bar-share-btn"
            onClick={handleShare}
            title="Share portfolio link"
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-neutral-500" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            id="top-bar-print-btn"
            onClick={handlePrint}
            title="Print or Save as PDF"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-medium cursor-pointer shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>
    </header>
  );
};
