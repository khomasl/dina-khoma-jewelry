import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/modules/admin/fields/linkGroup'
import { link } from '@/modules/admin/fields/link'

export const HeroSection: Block = {
  slug: 'hero-section',
  interfaceName: 'HeroSection',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'text',
    },
    link({
      appearances: false,
    }),
    {
      type: 'upload',
      name: 'image',
      relationTo: 'media',
      required: true,
    }
  ],
  labels: {
    plural: 'HeroSection',
    singular: 'HeroSection',
  },
}
