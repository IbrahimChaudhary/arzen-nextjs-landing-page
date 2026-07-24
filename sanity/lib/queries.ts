import { groq } from "next-sanity";

export const jobsQuery = groq`
  *[_type == "job" && isActive == true] | order(order asc) {
    "slug": slug.current,
    title,
    type,
    location,
    tag,
    tagColor,
    salary,
    startDate,
    about,
    responsibilities,
    mustHave,
    niceToHave,
    department,
    reportsTo
  }
`;

export const jobBySlugQuery = groq`
  *[_type == "job" && slug.current == $slug][0]{
    "slug": slug.current,
    title,
    type,
    location,
    tag,
    tagColor,
    salary,
    startDate,
    about,
    responsibilities,
    mustHave,
    niceToHave,
    department,
    reportsTo
  }
`;