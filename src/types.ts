import React from "react";

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
