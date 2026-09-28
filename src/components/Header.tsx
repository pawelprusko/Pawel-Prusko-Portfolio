import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onCopyNotice: (msg: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onCopyNotice }) => {
  const handleCopyEmail = (e: React.MouseEvent) => {
    // allow mailto on click, or copy if needed
  };

  return (
    <header id="portfolio-header" className="mb-6">
      {/* Title */}
      <h1
        id="portfolio-name-title"
        className="text-[28px] sm:text-[34px] md:text-[36px] font-bold tracking-tight text-[#1a1a1a] leading-tight mb-1"
      >
        {PERSONAL_INFO.name}
      </h1>

      {/* Role */}
      <div
        id="portfolio-role-subtitle"
        className="text-[17px] sm:text-[19px] md:text-[20px] font-normal text-[#595959] mb-4 tracking-normal"
      >
        {PERSONAL_INFO.role}
      </div>

      {/* Contact Line */}
      <div
        id="portfolio-contact-line"
        className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#333333] mb-5 flex flex-wrap items-center gap-x-2 gap-y-1"
      >
        <span>
          Tel: <a href={`tel:${PERSONAL_INFO.telLink}`} className="hover:underline text-[#222222] font-normal">{PERSONAL_INFO.tel}</a>
        </span>
        <span className="text-neutral-400 select-none">|</span>
        <span>
          E-mail: <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-[#222222] font-normal">{PERSONAL_INFO.email}</a>
        </span>
        <span className="text-neutral-400 select-none">|</span>
        <span>
          LinkedIn: <a href={PERSONAL_INFO.linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#222222] font-normal">{PERSONAL_INFO.linkedInUrl}</a>
        </span>
        <span className="text-neutral-400 select-none">|</span>
        <span>
          Localization: <span className="text-[#222222] font-normal">{PERSONAL_INFO.localization}</span>
        </span>
      </div>

      {/* Bio / Summary Paragraph */}
      <p
        id="portfolio-summary-text"
        className="text-[14.5px] sm:text-[15px] leading-[1.65] text-[#2e2e2e] text-justify font-normal"
      >
        {PERSONAL_INFO.summary}
      </p>
    </header>
  );
};
