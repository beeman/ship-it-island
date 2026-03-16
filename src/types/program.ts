export interface ApplicationFieldOption {
  label: string;
  value: string;
}

export interface ApplicationField {
  autocomplete?: string;
  description?: string;
  label: string;
  name: string;
  options?: ApplicationFieldOption[];
  placeholder?: string;
  required: boolean;
  rows?: number;
  type: "email" | "select" | "text" | "textarea" | "url";
}

export interface ApplicationSection {
  description?: string;
  fields: ApplicationField[];
  title: string;
}

export interface ContentItem {
  description: string;
  title: string;
}

export interface FocusArea extends ContentItem {
  tag: string;
}

export interface PricingOption {
  description: string;
  note?: string;
  price: string;
  title: string;
}

export interface ProgramConfig {
  about: {
    description: string;
    highlights: string[];
    title: string;
  };
  applicationSections: ApplicationSection[];
  audiences: ContentItem[];
  cohort: {
    duration: string;
    limitedSpots: string;
    location: string;
    summary: string;
    timeframe: string;
  };
  ctas: {
    apply: {
      href: string;
      label: string;
    };
    waitlist: {
      href: string;
      label: string;
    };
  };
  dailyRhythm: ContentItem[];
  diagnosticSteps: string[];
  faqItems: ContentItem[];
  focusAreas: FocusArea[];
  included: string[];
  notIncluded: string[];
  outcomes: ContentItem[];
  pricingOptions: PricingOption[];
  problemPoints: ContentItem[];
  selectionCriteria: string[];
  specialists: ContentItem[];
  valuePoints: ContentItem[];
  waitlist: {
    description: string;
    successMessage: string;
    title: string;
  };
}
