export interface PortfolioProject {
  id: string;
  name: string;
  subtitle: string;
  linkText: string;
  linkUrl?: string;
  actionType: 'deck' | 'link' | 'email';
}

export interface InitiativeItem {
  id: string;
  organization: string;
  bullets: {
    title: string;
    description: string;
  }[];
  linkText?: string;
  linkUrl?: string;
  noteText?: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  actionType: 'external' | 'modal' | 'email';
}
