import type { StructureResolver } from 'sanity/structure'

// Customizing the Sanity Studio sidebar structure
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content Manager')
    .items([
      S.documentTypeListItem('caseStudy').title('Portfolio Projects'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['caseStudy'].includes(item.getId()!),
      ),
    ])