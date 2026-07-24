import { defineField, defineType } from "sanity";


export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Used if you later build a dedicated /services/[slug] page.",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Keep it short — this renders in a fixed-width card (~max-w-md).",
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: "tags",
      title: "Tags / Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(6)
          .unique()
          .error("Add at least 1 tag, no duplicates, 6 max for card layout."),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Controls the 01, 02, 03… numbering on the card. Lower shows first.",
      validation: (Rule) => Rule.required().integer().min(0),
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Toggle off to hide from the site without deleting.",
      initialValue: true,
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
    select: { title: "title", subtitle: "description", order: "order" },
    prepare({ title, subtitle, order }) {
      return {
        title: `${String(order ?? 0).padStart(2, "0")} — ${title}`,
        subtitle,
      };
    },
  },
});