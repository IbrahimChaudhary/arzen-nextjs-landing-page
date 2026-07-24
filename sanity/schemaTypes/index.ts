import { type SchemaTypeDefinition } from 'sanity'
import caseStudy from './caseStudy'
import service from './service'
import job from './job'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job,service, caseStudy],
}