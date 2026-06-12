export interface ContactInfo {
  label: string;
  value: string;
}

export const contactInfo: ContactInfo[] = [
  { label: "Email", value: "hello@arzen.com" },
  { label: "Call Us", value: "+1 (234) 567-8900" },
  { label: "Location", value: "Remote · Worldwide" },
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