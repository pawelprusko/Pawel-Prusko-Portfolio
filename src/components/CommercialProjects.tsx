import React from 'react';
import { COMMERCIAL_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';

interface CommercialProjectsProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const CommercialProjects: React.FC<CommercialProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="commercial-projects-section" className="mb-8">
      {/* Section Header */}
      <h2
        id="commercial-projects-heading"
        className="text-[16px] sm:text-[17px] font-bold text-[#1f1f1f] mb-4 tracking-tight"
      >
        Commercial Data Experience Projects
      </h2>

      {/* Projects List - single column stack on all screen sizes */}
      <div className="space-y-4">
        {COMMERCIAL_PROJECTS.map((project) => (
          <div key={project.id} id={`project-item-${project.id}`} className="flex flex-col">
            {/* Project Title */}
            <h3 className="text-[14.5px] sm:text-[15px] font-semibold text-[#1a1a1a] leading-snug">
              {project.name}
            </h3>

            {/* Subtitle / Description */}
            <p className="text-[13.5px] sm:text-[14px] text-[#404040] leading-normal mt-0.5 mb-1 font-normal">
              {project.subtitle}
            </p>

            {/* Link */}
            <div>
              <button
                type="button"
                id={`project-link-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="inline-block text-[13px] sm:text-[13.5px] text-[#333333] underline underline-offset-2 hover:text-[#000000] transition-colors cursor-pointer text-left"
              >
                {project.linkText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
