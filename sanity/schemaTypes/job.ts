// schemaTypes/job.ts
import { defineField, defineType } from "sanity";


const TAG_COLORS = [
  { title: "Green", value: "green" },
  { title: "Pink", value: "pink" },
  { title: "Yellow", value: "yellow" },
  { title: "Blue", value: "blue" },
];

export default defineType({
  name: "job",
  title: "Job Posting",
  type: "document",
 
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "details", title: "Role Details" },
    { name: "requirements", title: "Requirements" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().min(3).max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, ""),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      group: "content",
      options: {
        list: ["Full time", "Part time", "Contract", "Internship"],
        layout: "radio",
      },
      initialValue: "Full time",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      group: "content",
      initialValue: "Remote",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag Label",
      description: 'Short badge shown on the card, e.g. "DEVELOPMENT"',
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().uppercase(),
    }),
    defineField({
      name: "tagColor",
      title: "Tag Color",
      type: "string",
      group: "content",
      options: {
        list: TAG_COLORS,
        layout: "radio",
      },
      initialValue: "green",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      group: "details",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reportsTo",
      title: "Reports To",
      type: "string",
      group: "details",
    }),
    defineField({
      name: "salary",
      title: "Salary",
      type: "string",
      group: "details",
      initialValue: "Depends on experience",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "string",
      group: "details",
      initialValue: "Flexible",
    }),
    defineField({
      name: "about",
      title: "About the Role",
      type: "array",
      group: "content",
      of: [{ type: "text", rows: 3 }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      group: "requirements",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "mustHave",
      title: "Must Have",
      type: "array",
      group: "requirements",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "niceToHave",
      title: "Nice to Have",
      type: "array",
      group: "requirements",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isActive",
      title: "Active",
      description: "Toggle off to hide this role from Open Positions without deleting it",
      type: "boolean",
      group: "settings",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      description: "Lower numbers appear first",
      type: "number",
      group: "settings",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "department",
      active: "isActive",
    },
    prepare({ title, subtitle, active }) {
      return {
        title,
        subtitle: `${subtitle}${active === false ? " · Inactive" : ""}`,
      };
    },
  },
});