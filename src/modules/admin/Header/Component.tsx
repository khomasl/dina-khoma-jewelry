import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/modules/admin/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/modules/admin/payload-types'

export async function Header() {
  const header: Header = await getCachedGlobal('header', 1)()

  return <HeaderClient header={header} />
}
