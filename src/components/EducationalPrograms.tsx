import React from 'react';
import { EDUCATIONAL_PROGRAMS } from '../data/portfolioData';

interface EducationalProgramsProps {
  onCopyNotice: (msg: string) => void;
}

export const EducationalPrograms: React.FC<EducationalProgramsProps> = ({ onCopyNotice }) => {
  return (
    <section id="educational-programs-section" className="mb-8">
      {/* Section Header */}
      <h2
        id="educational-programs-heading"
        className="text-[16px] sm:text-[17px] font-bold text-[#1f1f1f] mb-4 tracking-tight"
      >
        Personal Worldwide Educational and Mentoring Programs
      </h2>

      {/* Programs List */}
      <div className="space-y-6">
        {EDUCATIONAL_PROGRAMS.map((program) => (
          <div key={program.id} id={`program-item-${program.id}`} className="flex flex-col">
            {/* Title */}
            <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#1a1a1a] mb-2 leading-snug">
              {program.title}
            </h3>

            {/* Bullet description */}
            <div className="flex items-start text-[13.5px] sm:text-[14px] text-[#333333] leading-[1.6] mb-2">
              <span className="mr-2 text-[#222222] select-none font-bold">•</span>
              <p className="text-[#333333] font-normal">{program.description}</p>
            </div>

            {/* Link - opens in a new tab */}
            <div>
              <a
                id={`program-link-${program.id}`}
                href={program.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[13px] sm:text-[13.5px] text-[#333333] underline underline-offset-2 hover:text-[#000000] transition-colors"
              >
                {program.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
