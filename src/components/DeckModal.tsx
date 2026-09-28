import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Copy, Check, ExternalLink, Presentation } from 'lucide-react';
import { PortfolioProject } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface DeckModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onCopyNotice: (msg: string) => void;
}

const PROJECT_DETAILS: Record<string, { summary: string; scope: string[]; metrics: string }> = {
  lyondell: {
    summary:
      'High-reliability supervisory control and real-time monitoring interfaces designed for petrochemical production plants, handling high-frequency sensor telemetry without cognitive overload.',
    scope: [
      'Multi-screen plant overview with situational awareness indicators',
      'Explainable alert telemetry and anomaly triage workflows',
      'Cognitive load reduction for 12-hour shift control-room operators',
    ],
    metrics: 'Implemented across major refinery and polymer compounding units.',
  },
  newag: {
    summary:
      'Modern manufacturing and rolling-stock inventory control dashboards providing end-to-end visibility of components, supply chain logistics, and maintenance scheduling.',
    scope: [
      'Component traceability and stock level predictive alert maps',
      'Assembly line bottleneck diagnostics and work-in-progress monitoring',
      'Interactive bill-of-materials visual browser for engineering teams',
    ],
    metrics: 'Streamlined material flow and parts allocation for railway rolling stock production.',
  },
  finops: {
    summary:
      'Enterprise financial operations telemetry platform correlating multi-cloud infrastructure usage with direct business unit unit economics and allocation forecasts.',
    scope: [
      'Unified multi-cloud spending breakdown (AWS, GCP, Azure)',
      'Anomaly detection for sudden compute/storage spikes',
      'Executive-level unit economics modeling and budget threshold monitors',
    ],
    metrics: 'Assisted cloud architects and CFO offices in identifying high-cost idle resources.',
  },
  'aws-cudos': {
    summary:
      'Executive strategy dashboards transforming AWS Cost & Usage Data (CUDOS framework) into actionable strategic decisions for technology leadership and procurement.',
    scope: [
      'KPI scorecard for Reserved Instance and Savings Plans coverage',
      'Account-level cost center chargebacks and forecasting',
      'Visual decision trees for architectural right-sizing opportunities',
    ],
    metrics: 'Delivered executive-ready transparency into multi-account cloud expenditures.',
  },
};

export const DeckModal: React.FC<DeckModalProps> = ({ project, onClose, onCopyNotice }) => {
  const [copied, setCopied] = React.useState(false);

  if (!project) return null;

  const details = PROJECT_DETAILS[project.id];
  const emailSubject = encodeURIComponent(`Request for Presentation Deck: ${project.name}`);
  const emailBody = encodeURIComponent(
    `Hello Paweł,\n\nI reviewed your online portfolio and would like to request access to the presentation deck for:\n- Project: ${project.name} (${project.subtitle})\n\nPlease share the confidential deck or let me know when we can arrange a brief walkthrough.\n\nBest regards,\n`
  );
  const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onCopyNotice('Email address copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div
        id="deck-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          id="deck-modal-dialog"
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl border border-neutral-200 max-w-lg w-full p-6 text-neutral-900 relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-neutral-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-700">
                <Presentation className="w-5 h-5" />
              </div>
              <div>
                <h3 id="deck-modal-title" className="text-lg font-bold text-neutral-900 leading-tight">
                  {project.name}
                </h3>
                <p id="deck-modal-subtitle" className="text-xs text-neutral-500 font-medium">
                  {project.subtitle}
                </p>
              </div>
            </div>
            <button
              id="deck-modal-close-btn"
              onClick={onClose}
              aria-label="Close dialog"
              className="text-neutral-400 hover:text-neutral-700 p-1.5 rounded-md hover:bg-neutral-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="py-4 space-y-3.5 text-sm text-neutral-700">
            <div className="bg-neutral-50 p-3.5 rounded-lg border border-neutral-100 text-xs leading-relaxed text-neutral-600">
              <span className="font-semibold text-neutral-800 block mb-1">Presentation Deck Confidentiality Notice:</span>
              Detailed presentation decks contain proprietary client telemetry and UI architectures. Full slide decks are provided directly to hiring managers and partners upon request.
            </div>

            {details && (
              <div className="space-y-2 text-xs">
                <p className="text-neutral-700 leading-relaxed font-normal">{details.summary}</p>
                <div className="pt-1">
                  <span className="font-semibold text-neutral-900 block mb-1">Key Architectural Contributions:</span>
                  <ul className="list-disc list-inside space-y-1 text-neutral-600 pl-1">
                    {details.scope.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-end gap-2 text-xs font-medium">
            <button
              id="deck-modal-copy-email-btn"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-neutral-200 text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Email'}</span>
            </button>
            <a
              id="deck-modal-request-email-link"
              href={mailtoLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Request Deck Access</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
