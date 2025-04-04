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
}

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
