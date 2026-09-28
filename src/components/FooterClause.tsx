import React from 'react';
import { GDPR_CLAUSE } from '../data/portfolioData';

export const FooterClause: React.FC = () => {
  return (
    <footer id="portfolio-footer-clause" className="mt-12 pt-6 border-t border-neutral-200/60">
      <p
        id="gdpr-consent-text"
        className="text-[9.5px] sm:text-[10px] leading-[1.55] text-neutral-400 font-normal text-justify"
      >
        {GDPR_CLAUSE}
      </p>
    </footer>
  );
};
