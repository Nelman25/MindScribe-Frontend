import { Feature, Step } from "../types";

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
