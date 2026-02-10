import { LucideIcon } from 'lucide-react';

export interface PromptProfile {
  id: string;
  title: string;
  author: string;
  category: string;
  tags: string[];
  price: string;
  avatarUrl: string;
  modelIcon: string;
  description: string;
  content: string; // Added content field for the actual prompt
}

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Task {
  id: string;
  label: string;
  icon?: string; // Emoji
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  variant: 'outline' | 'primary' | 'white';
  paddlePriceId?: string; // Optional ID for Paddle checkout
}