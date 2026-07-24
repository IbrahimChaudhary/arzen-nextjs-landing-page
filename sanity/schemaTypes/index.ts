import { type SchemaTypeDefinition } from 'sanity'
import aboutPage, { aboutStat, aboutTeamMember, aboutValue } from './aboutPage'
import caseStudy from './caseStudy'
import service from './service'
import job from './job'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, service, caseStudy, aboutStat, aboutTeamMember, aboutValue, aboutPage],
}