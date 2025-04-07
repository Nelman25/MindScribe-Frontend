import { Feature, HeadingProps, JournalEntry, Step } from "../types";

import { CiStar } from "react-icons/ci";
import { PiBrain } from "react-icons/pi";
import { GoTag } from "react-icons/go";
import { RiChatPrivateLine } from "react-icons/ri";
import { CiChat1 } from "react-icons/ci";
import { PiDevicesLight } from "react-icons/pi";

export const FEATURES: Feature[] = [
  {
    title: "Mood Tracking",
    description:
      "Record your mood daily and visualize your emotional patterns over time to identify triggers and trends.",
    icon: <CiStar className="size-8 text-primary font" />,
  },
  {
    title: "AI-Powered Insights",
    description:
      "Organize your entries with personalized tags to easily track specific aspects of your life and emotions.",
    icon: <PiBrain className="size-8 text-primary font" />,
  },
  {
    title: "Customizable Tags",
    description:
      "Organize your entries with personalized tags to easily track specific aspects of your life and emotions.",
    icon: <GoTag className="size-8 text-primary font" />,
  },
  {
    title: "Secure & Private",
    description:
      "Your journal is protected with industry-standard encryption. Your thoughts remain private and secure.",
    icon: <RiChatPrivateLine className="size-8 text-primary font" />,
  },
  {
    title: "Guided Prompts",
    description:
      "Never face a blank page with our thoughtful prompts designed to inspire reflection and self-discovery.",
    icon: <CiChat1 className="size-8 text-primary font" />,
  },
  {
    title: "Cross-Platform",
    description:
      "Access your journal from any device - your entries sync seamlessly across web, mobile, and desktop.",
    icon: <PiDevicesLight className="size-8 text-primary font" />,
  },
];

export const STEPS: Step[] = [
  {
    number: "1",
    title: "Sign Up",
    description:
      "Create your free account and personalize your journal settings to match your preferences.",
  },
  {
    number: "2",
    title: "Record Daily",
    description:
      "Take a few minutes each day to record your thoughts, experiences, and emotions.",
  },
  {
    number: "3",
    title: "Gain Insights",
    description:
      "Receive personalized AI analysis and see your emotional patterns visualized over time.",
  },
  {
    number: "4",
    title: "Grow",
    description:
      "Use these insights to make positive changes and track your progress toward better wellbeing.",
  },
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    title: "Productive day and outdoor walk",
    date: "March 19, 2025",
    mood: "Happy",
    text: "Today was a productive day. I managed to finish the project I was working on and even had time to go for a walk in the park. The weather was perfect, and I felt really good about my accomplishments...",
    tags: ["Work", "Outdoors"],
  },
  {
    title: "A tough morning, but a better evening",
    date: "March 18, 2025",
    mood: "Mixed",
    text: "The morning started off rough. I felt overwhelmed with tasks, and nothing seemed to go right. But by evening, I managed to clear my mind with a short meditation session and some light reading. It really helped me refocus...",
    tags: ["Stress", "Self-care", "Reading"],
  },
  {
    title: "Catching up with an old friend",
    date: "March 17, 2025",
    mood: "Excited",
    text: "Had a great time catching up with an old friend over coffee. We reminisced about the past and laughed a lot. It felt refreshing to connect again after so long...",
    tags: ["Friendship", "Social"],
  },
  {
    title: "Low energy day",
    date: "March 16, 2025",
    mood: "Tired",
    text: "I felt really sluggish today. Maybe it’s the weather or just one of those days. I tried to be productive, but I just didn’t have the energy. Hopefully, tomorrow will be better...",
    tags: ["Rest", "Self-care"],
  },
  {
    title: "Gym session and self-improvement",
    date: "March 15, 2025",
    mood: "Motivated",
    text: "I finally went back to the gym today after weeks of procrastination. It felt amazing to get my body moving again. I also listened to an inspiring podcast on personal growth...",
    tags: [
      "Fitness",
      "Motivation",
      "Self-improvement",
      "Fitness",
      "Motivation",
      "Self-improvement",
    ],
  },
  {
    title: "Deep work and focus",
    date: "March 14, 2025",
    mood: "Determined",
    text: "I dedicated the entire day to deep work, completely avoiding distractions. It was challenging at first, but once I got into the flow, I accomplished so much. Feeling really proud of my discipline today...",
    tags: ["Work", "Productivity", "Focus"],
  },
  {
    title: "Rainy day reflections",
    date: "March 13, 2025",
    mood: "Melancholic",
    text: "It rained all day, which made me feel a bit nostalgic. I spent the afternoon journaling and reflecting on how much has changed over the past year. Some memories brought a smile, while others felt bittersweet...",
    tags: ["Reflection", "Weather", "Journaling"],
  },
  {
    title: "Cooking experiment gone wrong",
    date: "March 12, 2025",
    mood: "Amused",
    text: "Tried a new recipe today, and let’s just say it didn’t go as planned. The dish was a disaster, but at least I had a good laugh about it. Cooking might not be my strong suit, but I’ll try again...",
    tags: ["Cooking", "Fun", "Experiment"],
  },
  {
    title: "Midweek burnout",
    date: "March 11, 2025",
    mood: "Stressed",
    text: "Feeling exhausted from all the work piling up. Deadlines are getting closer, and I need to find a better way to manage my workload. A short break helped a bit, but I definitely need to recharge...",
    tags: ["Work", "Stress", "Burnout"],
  },
  {
    title: "Small wins matter",
    date: "March 10, 2025",
    mood: "Grateful",
    text: "Today, I reminded myself that progress is progress, no matter how small. I tackled some lingering tasks, and even though they were minor, it felt good to check them off my list...",
    tags: ["Motivation", "Gratitude", "Progress"],
  },
];

export const HEADINGS: HeadingProps[] = [
  {
    level: 1,
    text: "H₁",
  },
  {
    level: 2,
    text: "H₂",
  },
  {
    level: 3,
    text: "H₃",
  },
  {
    level: 4,
    text: "H₄",
  },
  {
    level: 5,
    text: "H₅",
  },
  {
    level: 6,
    text: "H₆",
  },
];
