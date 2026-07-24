
import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutStat = defineType({
  name: "aboutStat",
  title: "About Stat",
  type: "object",
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: "Short stat value, such as 120+ or 5+",
      validation: (Rule) => Rule.required().max(20),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "Explain what the stat represents",
      validation: (Rule) => Rule.required().max(40),
    }),
  ],
});

export const aboutTeamMember = defineType({
  name: "aboutTeamMember",
  title: "Team Member",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(220),
    }),
    defineField({
      name: "initials",
      title: "Initials",
      type: "string",
      description: "Short initials shown in the avatar circle",
      validation: (Rule) => Rule.required().max(6),
    }),
    defineField({
      name: "accent",
      title: "Accent Color",
      type: "string",
      options: {
        list: [
          { title: "Green", value: "green" },
          { title: "Pink", value: "pink" },
          { title: "Orange", value: "orange" },
        ],
        layout: "radio",
      },
      initialValue: "green",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const aboutValue = defineType({
  name: "aboutValue",
  title: "Value",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(220),
    }),
  ],
});

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
 
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      initialValue: "About",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Heading",
      type: "string",
      description: "Main title shown in the hero section",
      validation: (Rule) => Rule.required().max(90),
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 3,
      description: "Short overview for the about hero",
      validation: (Rule) => Rule.required().max(280),
    }),
    defineField({
      name: "heroPrimaryCtaLabel",
      title: "Primary CTA Label",
      type: "string",
      initialValue: "Our Services",
    }),
    defineField({
      name: "heroPrimaryCtaHref",
      title: "Primary CTA Link",
      type: "string",
      initialValue: "/work",
    }),
    defineField({
      name: "heroSecondaryCtaLabel",
      title: "Secondary CTA Label",
      type: "string",
      initialValue: "View Portfolio",
    }),
    defineField({
      name: "heroSecondaryCtaHref",
      title: "Secondary CTA Link",
      type: "string",
      initialValue: "/portfolio",
    }),
    defineField({
      name: "storyParagraphs",
      title: "Story Paragraphs",
      type: "array",
      description: "Add one paragraph per text block",
      of: [defineArrayMember({ type: "text", rows: 2 })],
      validation: (Rule) => Rule.min(1).max(4),
    }),
    defineField({
      name: "stats",
      title: "Highlights / Stats",
      type: "array",
      description: "Display 4 highlight cards in the story section",
      of: [defineArrayMember({ type: "aboutStat" })],
      validation: (Rule) => Rule.min(4).max(4),
    }),
    defineField({
      name: "team",
      title: "Team Members",
      type: "array",
      of: [defineArrayMember({ type: "aboutTeamMember" })],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "values",
      title: "Company Values",
      type: "array",
      of: [defineArrayMember({ type: "aboutValue" })],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "isActive",
      title: "Publish on site",
      type: "boolean",
      description: "Toggle off to hide the about page content",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "heroTitle", subtitle: "heroDescription" },
    prepare({ title, subtitle }) {
      return {
        title: title || "About Page",
        subtitle: subtitle || "Manage hero, story, team, and values",
      };
    },
  },
});

export default aboutPage;