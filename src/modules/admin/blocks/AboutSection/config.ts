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
  slug: 'about-section',
  interfaceName: 'AboutSection',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'header',
      type: 'text',
      label: 'Header',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'items',
      type: 'array',
      fields:[
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'text',
        },
      ]
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
    plural: 'AboutSection',
    singular: 'AboutSection',
  },
}
