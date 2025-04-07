import React, { ReactNode } from "react";
import { Level } from "@tiptap/extension-heading";

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface JournalEntry {
  title: string;
  date: string;
  mood: string;
  text: string;
  tags: string[];
}

export interface MessageBubbleProps {
  content: string;
  title: string;
  timestamp?: Date;
  icon: React.ReactNode;
}

export type HTMLButtonType = "button" | "submit" | "reset";

export type ButtonType = {
  children: string | ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: "outline" | "default";
  htmlType?: HTMLButtonType;
  className?: string;
};

export interface FilterButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export type FocusType =
  | "Patterns"
  | "Emotional Trends"
  | "Suggestions"
  | "Questions";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthProviderButtonProps {
  children: ReactNode;
  isLoading: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export interface ToolbarButtonProps {
  onClick: () => void;
  isActive: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface HeadingProps {
  level: Level;
  text: string;
}

export interface Mood {
  emoji: string;
  label: string;
  value: string;
}
