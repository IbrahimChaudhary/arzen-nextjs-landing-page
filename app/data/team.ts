export type AvatarAccent = "green" | "pink" | "orange";

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Initials shown in the avatar circle. */
  initials: string;
  /** Accent color for the avatar ring/text. */
  accent: AvatarAccent;
}

export const team: TeamMember[] = [
  {
    name: "Asad Nadeen",
    role: "Co-Founder & CEO",
    bio: "Leads strategy and client relationships. 7 years in product development.",
    initials: "AN",
    accent: "green",
  },
  {
    name: "Kamal Mustafa",
    role: "Coo Partner",
    bio: "Chief Operating Officer (COO) acts as the vital strategic partner to a CEO or Founder.",
    initials: "KM",
    accent: "pink",
  },
  {
    name: "Muhammad Umair",
    role: "Lead Designer",
    bio: "UI/UX specialist with a passion for pixel-perfect interfaces and clean systems.",
    initials: "MU",
    accent: "orange",
  },
  {
    name: "Abdul Rehman",
    role: "Marketing Manager",
    bio: "an experienced professional responsible for planning, developing, and overseeing.",
    initials: "AR",
    accent: "orange",
  },
];