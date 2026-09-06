export type ApproachType = 'no-code' | 'low-code' | 'high-code';

export interface ApproachInfo {
  id: ApproachType;
  title: string;
  subtitle: string;
  spectrumPosition: number; // 0 for No Code, 50 for Low Code, 100 for High Code
  color: {
    badgeBg: string;
    badgeText: string;
    border: string;
    borderActive: string;
    accent: string;
    glow: string;
    tagBg: string;
    tagText: string;
  };
  summary: string;
  definition: string;
  keyPoints: string[];
  user: string;
  skillsRequired: string;
  developmentSpeed: string;
  flexibility: string;
  useCases: string[];
  examplePlatforms: string[];
  pros: string[];
  cons: string[];
  speedRating: number; // 1-5
  flexibilityRating: number; // 1-5
  skillRequirementRating: number; // 1-5
}

export interface ComparisonRow {
  feature: string;
  iconName: string;
  description: string;
  noCode: string;
  lowCode: string;
  highCode: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    label: string;
    description: string;
    target: ApproachType;
  }[];
}
