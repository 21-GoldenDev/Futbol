export type PackageId = "single" | "three" | "five";

export const CONTACT = {
  phone: "(917) 555-0147",
  phoneHref: "tel:+19175550147",
  email: "hello@g7futboltraining.com",
  emailHref: "mailto:hello@g7futboltraining.com",
  instagram: "@g7futboltraining",
  instagramHref: "https://instagram.com/g7futboltraining",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/training", label: "Training" },
  { href: "/pricing", label: "Pricing" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
] as const;

export const PACKAGES = [
  {
    id: "single" as const,
    price: "$80",
    label: "1 Hour Session",
    perks: ["Private 1-on-1 training", "Personalized drills", "Focus on your goals"],
  },
  {
    id: "three" as const,
    price: "$220",
    label: "3 Sessions",
    perks: ["Save on training", "Build consistency", "Track your progress"],
  },
  {
    id: "five" as const,
    price: "$350",
    label: "5 Sessions",
    perks: ["Best value", "Long-term development", "Greater improvement"],
  },
];

export const LOCATIONS = [
  {
    name: "Manhattan",
    text: "Parks and turf fields across the borough. We’ll pick a spot that fits your commute.",
  },
  {
    name: "Brooklyn",
    text: "Flexible outdoor and turf options. Great for weeknight and weekend sessions.",
  },
  {
    name: "Staten Island",
    text: "Local fields and open space so players can train close to home.",
  },
  {
    name: "Flexible Locations",
    text: "I can work with you to find a convenient training spot that fits your schedule.",
  },
];

export const HERO_FEATURES = [
  {
    key: "technical",
    title: "Technical Skills",
    text: "Improve your fundamentals",
  },
  {
    key: "game",
    title: "Game Development",
    text: "Build confidence on and off the field",
  },
  {
    key: "personal",
    title: "Personalized Training",
    text: "Tailored to your goals",
  },
  {
    key: "youth",
    title: "Youth Focused",
    text: "Helping the next generation grow",
  },
] as const;

export const ABOUT_POINTS = [
  {
    key: "oneOnOne",
    title: "1-On-1 Training",
    text: "Focused attention for faster improvement",
  },
  {
    key: "levels",
    title: "All Skill Levels",
    text: "Beginners to advanced",
  },
  {
    key: "youth",
    title: "Youth Development",
    text: "Individual growth & confidence",
  },
  {
    key: "intelligence",
    title: "Game Intelligence",
    text: "Learn to think and play smarter",
  },
  {
    key: "environment",
    title: "Positive Environment",
    text: "Work hard, have fun, and grow",
  },
] as const;
