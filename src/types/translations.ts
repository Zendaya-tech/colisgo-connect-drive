// Types pour les traductions
export interface Step {
  title: string;
  description: string;
}

export interface Profile {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface SecurityFeature {
  title: string;
  description: string;
  icon: string;
}

export interface TranslationArrays {
  "howItWorks.steps": Step[];
  "howItWorks.profiles": Profile[];
  "howItWorks.steps.list": ProcessStep[];
  "howItWorks.security.features": SecurityFeature[];
  "howItWorks.pricing.features": string[];
  "faq.questions": FAQ[];
  "testimonials.reviews": Testimonial[];
  "cta.features": string[];
}

// Helper type pour les traductions avec arrays
export type TranslationKey = keyof TranslationArrays;

// Helper function pour typer les traductions d'arrays
export function getTranslationArray<T extends TranslationKey>(
  t: any,
  key: T
): TranslationArrays[T] {
  return t(key, { returnObjects: true }) as TranslationArrays[T];
}
