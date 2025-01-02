import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/modules/admin/fields/linkGroup'
import { link } from '@/modules/admin/fields/link'

export const AboutSection: Block = {
  slug: 'about-section',
  interfaceName: 'AboutSection',
  fields: [
    {
      name: 'header',
      type: 'text',
    },
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
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
      ],
    }
  ],
  labels: {
    plural: 'AboutSection',
    singular: 'AboutSection',
  },
}
