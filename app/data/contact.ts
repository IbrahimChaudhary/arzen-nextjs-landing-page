export interface ContactInfo {
  label: string;
  value: string;
}

export const contactInfo: ContactInfo[] = [
  { label: "Email", value: "contactus@arzeninc.com" },
  { label: "Call Us", value: "+92 319 8401751" },
  { label: "Location", value: "239 st 20 , Township Sector A1 Lahore" },
  { label: "Response Time", value: "Within 24 hours" },
];

export const serviceOptions: string[] = [
  "Web Development",
  "UI/UX Design",
  "Digital Growth",
  "Brand Identity",
];

export const featureOptions: string[] = [
  "Custom UI/UX Design",
  "Backend / API Development",
  "User Authentication",
  "Payment Integration",
  "SEO Optimization",
  "Ongoing Maintenance",
];