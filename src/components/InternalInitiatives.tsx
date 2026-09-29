import React from 'react';
import { INTERNAL_INITIATIVES } from '../data/portfolioData';

interface InternalInitiativesProps {
  onCopyNotice: (msg: string) => void;
}

export const InternalInitiatives: React.FC<InternalInitiativesProps> = ({ onCopyNotice }) => {
  return (
    <section id="internal-initiatives-section" className="mb-8">
      {/* Section Header */}
      <h2
        id="internal-initiatives-heading"
        className="text-[16px] sm:text-[17px] font-bold text-[#1f1f1f] mb-4 tracking-tight"
      >
        Organizations Internal Data Experience Initiatives
      </h2>

      {/* Initiatives Stack */}
      <div className="space-y-6">
        {INTERNAL_INITIATIVES.map((item) => (
          <div key={item.id} id={`initiative-item-${item.id}`} className="flex flex-col">
            {/* Organization Name */}
            <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#1a1a1a] mb-2 leading-snug">
              {item.organization}
            </h3>

            {/* Bullet points */}
            <div className="space-y-2.5 mb-2.5">
              {item.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start text-[13.5px] sm:text-[14px] text-[#333333] leading-[1.6]">
                  <span className="mr-2 text-[#222222] select-none font-bold">•</span>
                  <div>
                    <span className="font-semibold text-[#1a1a1a]">{bullet.title}: </span>
                    <span className="text-[#333333] font-normal">{bullet.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Link if present */}
            {item.linkText && item.linkUrl && (
              <div className="mt-1">
                <a
                  id={`initiative-link-${item.id}`}
                  href={item.linkUrl}
                  className="inline-block text-[13px] sm:text-[13.5px] text-[#333333] underline underline-offset-2 hover:text-[#000000] transition-colors"
                >
                  {item.linkText}
                </a>
              </div>
            )}

            {/* Plain note without underlines */}
            {item.noteText && (
              <p
                id={`initiative-note-${item.id}`}
                className="mt-1 text-[13px] sm:text-[13.5px] text-[#333333] leading-[1.6]"
              >
                {item.noteText}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
