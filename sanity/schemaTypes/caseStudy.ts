import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Portfolio Case Study',
  type: 'document',
  fieldsets: [
    { name: 'card', title: 'Portfolio Card Details (Project Interface)' },
    { name: 'page', title: 'Case Study Page Details (CaseStudyDetails Interface)' },
  ],
  fields: [
    // ==========================================
    // PROJECT INTERFACE (Card & Page Level)
    // ==========================================
    defineField({ 
      name: 'title', 
      title: 'Project & Case Study Title', 
      type: 'string',
      description: 'Used for both the portfolio card title and the inner case study h1 heading.',
      validation: (Rule) => Rule.required(), 
      fieldset: 'card'
    }),
    defineField({ 
      name: 'slug', 
      title: 'Slug (URL)', 
      type: 'slug', 
      options: { source: 'title' },
      fieldset: 'card'
    }),
    defineField({
      name: 'status',
      title: 'Project Status',
      type: 'string',
      options: {
        list: [
          { title: 'Live', value: 'Live' },
          { title: 'Delivered', value: 'Delivered' },
          { title: 'Ongoing', value: 'Ongoing' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      fieldset: 'card'
    }),
    defineField({
      name: 'tech',
      title: 'Tech Stack / Tools',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Used for the portfolio row tech list AND the case study "Tech" section.',
      fieldset: 'card'
    }),
    defineField({ 
      name: 'category', 
      title: 'Categories', 
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Web Development', value: 'Web Development' },
          { title: 'Design', value: 'Design' },
          { title: 'SaaS', value: 'SaaS' },
          { title: 'Branding', value: 'Branding' },
          { title: 'Identity', value: 'Identity' },
        ],
      },
      fieldset: 'card'
    }),
    defineField({ 
      name: 'intro', 
      title: 'Description & Intro Text', 
      type: 'text',
      description: 'Used for both the portfolio card description and the case study intro paragraph.',
      validation: (Rule) => Rule.required(), 
      fieldset: 'card'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'card'
    }),
    defineField({ 
      name: 'heroImage', 
      title: 'Hero / Card Image', 
      type: 'image',
      description: 'REQUIRED: Acts as the portfolio card image AND case study hero image.',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      fieldset: 'card'
    }),

    // ==========================================
    // CASE STUDY DETAILS INTERFACE (Page Level)
    // ==========================================
    defineField({ 
      name: 'philosophyText', 
      title: 'Philosophy Text', 
      type: 'text',
      fieldset: 'page'
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
      fieldset: 'page'
    }),

    // Stats Array
    defineField({
  name: 'stats',
  title: 'Project Stats',
  type: 'array',
  fieldset: 'page',
  initialValue: [
    { value: '3wk', label: 'Delivery Time' },
    { value: '5', label: 'Concepts Explored' },
    { value: '100%', label: 'Client Satisfaction' },
  ],
  of: [
    {
      type: 'object',
      fields: [
        { 
          name: 'value', 
          title: 'Stat Value', 
          type: 'string',
          description: 'e.g. 3wk, 5, 100%' 
        },
        { 
          name: 'label', 
          title: 'Stat Label', 
          type: 'string',
          options: {
            list: [
              { title: 'Delivery Time', value: 'Delivery Time' },
              { title: 'Concepts Explored', value: 'Concepts Explored' },
              { title: 'Client Satisfaction', value: 'Client Satisfaction' },
            ],
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}),

    // Colors Array
    defineField({
      name: 'colors',
      title: 'Brand Colors',
      type: 'array',
      fieldset: 'page',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'hex', title: 'Hex Code', type: 'string', description: 'e.g. #F25C38' },
            { name: 'name', title: 'Color Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
    
    // Case Study Images
    defineField({ 
      name: 'philosophyImage', 
      title: 'Philosophy Image', 
      type: 'image',
      fieldset: 'page'
    }),
    defineField({ 
      name: 'colorPaletteImage', 
      title: 'Color Palette Image', 
      type: 'image',
      fieldset: 'page'
    }),
    defineField({ 
      name: 'showcaseImage', 
      title: 'Tall Showcase Image', 
      type: 'image',
      description: 'REQUIRED: The final tall showcase image at the bottom.',
      validation: (Rule) => Rule.required(),
      fieldset: 'page'
    }),
  ],
})