import type { GlobalConfig } from 'payload'

import { link } from '@/modules/admin/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 3,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: `${process.env.PAYLOAD_ROOT_DIR || '@/modules/admin'}/Header/RowLabel#RowLabel`,
        },
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [

          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
          },
          link({
                 appearances: false,
               }),
      ],
      maxRows: 3,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'phoneLink',
      type: 'text',
    }
  ],

  hooks: {
    afterChange: [revalidateHeader],
  },
}
