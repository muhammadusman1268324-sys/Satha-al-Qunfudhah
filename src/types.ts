export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ServiceArea {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface SampleReview {
  id: string;
  author: string;
  rating: number;
  content: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface RequestFormData {
  fullName: string;
  phoneNumber: string;
  currentLocation: string;
  destination: string;
  carModel: string;
  notes: string;
}
