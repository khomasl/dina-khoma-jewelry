import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/modules/admin/fields/linkGroup'
import { link } from '@/modules/admin/fields/link'

export const CollectionSection: Block = {
  slug: 'collection-section',
  interfaceName: 'CollectionSection',
  fields: [
    {
      name: 'header',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {

      name: 'products',
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
        {
          name: 'price',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ]
    }
  ],
  labels: {
    plural: 'CollectionSection',
    singular: 'CollectionSection',
  },
}
