export const COMMAND_SUGGESTIONS = [
  "help",
  "skills",
  "s",
  "clear",
  "c",
  "projects",
  "pj",
  "about",
  "artworks",
  "aw",
  "github",
  "gh",
  "linkedin",
  "lk",
  "facebook",
  "fb",
  "email",
  "em",
  "instagram",
  "st",
] as const;

export const LINKS = {
  github: "https://github.com/rupontinova",
  linkedin: "https://www.linkedin.com/in/ruponti-muin-nova/",
  facebook: "https://www.facebook.com/ruponti.muin",
  email: "mailto:rupontibup@gmail.com",
  instagram: "https://www.instagram.com/_rupontinova_/",
} as const;

type Project = {
  title: string;
  description: string;
  tech: string;
  href: string;
  githubHref?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Tilottoma",
    description:
      "Official E-commerce and corporate platform for a Bangladeshi interior and building materials brand, with dual admin/main portals and complex routing.",
    tech: "Next.js, Tailwind CSS, Redux Toolkit",
    href: "https://tilottoma.com/",
  },
  {
    title: "Creative Matter",
    description:
      "Official portfolio for a digital agency, with a premium conversion-ready design and complex interactive UI.",
    tech: "Next.js, TypeScript, Tailwind CSS, Shadcn UI",
    href: "https://creative-matter-v2.vercel.app/",
  },
  {
    title: "Program Outcome Tracker",
    description:
      "Developed an Outcome-Based Education (OBE) system aligned with BAETE accreditation guidelines, currently in beta testing for BUP faculty, for digital performance assessment management.",
    tech: "Next.js, TypeScript, MongoDB, JWT",
    href: "https://github.com/rupontinova/program-outcome-v2",
  },
  {
    title: "TreatWell 2.0",
    description: "A healthcare website for patients and doctors.",
    tech: "NextJS, TypeScript, MongoDB",
    href: "https://github.com/rupontinova/treatwell-next",
  },
  {
    title: "Smart Waste Sorter",
    description: "AI-Powered Waste Classification using computer vision.",
    tech: "YOLOv8, Flask, React, Python",
    href: "https://github.com/rupontinova/AI-Waste-Sorter",
  },
  {
    title: "Inventory Nexus",
    description:
      "Inventory Management System Application based on JAVA swing GUI.",
    tech: "JAVA, MYSQL",
    href: "https://github.com/rupontinova/Inventory-Nexus",
  },
  {
    title: "StockPro",
    description: "A CLI based Inventory Management Program.",
    tech: "JAVA",
    href: "https://github.com/rupontinova/Inventory-Manager-StockPro-",
  },
  {
    title: "rupontis portfolio",
    description: "This very site — a retro terminal-themed personal portfolio.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    href: "https://github.com/rupontinova/rupontis_portfolio",
  },
];

export type CommandResult =
  | { type: "none" }
  | { type: "help" }
  | { type: "skills" }
  | { type: "projects" }
  | { type: "about" }
  | { type: "artworks" }
  | { type: "clear" }
  | { type: "link"; href: string }
  | { type: "not-found" };

export function resolveCommand(raw: string): CommandResult {
  const cmd = raw.trim().toLowerCase();
  if (!cmd) {
    return { type: "none" };
  }

  switch (cmd) {
    case "help":
      return { type: "help" };
    case "skills":
    case "s":
      return { type: "skills" };
    case "projects":
    case "pj":
      return { type: "projects" };
    case "about":
      return { type: "about" };
    case "artworks":
    case "aw":
      return { type: "artworks" };
    case "clear":
    case "c":
      return { type: "clear" };
    case "github":
    case "gh":
      return { type: "link", href: LINKS.github };
    case "linkedin":
    case "lk":
      return { type: "link", href: LINKS.linkedin };
    case "facebook":
    case "fb":
      return { type: "link", href: LINKS.facebook };
    case "email":
    case "em":
      return { type: "link", href: LINKS.email };
    case "instagram":
    case "st":
      return { type: "link", href: LINKS.instagram };
    default:
      return { type: "not-found" };
  }
}
