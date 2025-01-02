import type { GlobalConfig } from 'payload'

import { link } from '@/modules/admin/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: `${process.env.PAYLOAD_ROOT_DIR || '@/modules/admin'}/Footer/RowLabel#RowLabel`,
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
