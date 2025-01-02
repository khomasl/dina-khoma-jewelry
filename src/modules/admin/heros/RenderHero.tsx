import React from 'react'

import type { Page } from '@/modules/admin/payload-types'

import { HighImpactHero } from '@/modules/admin/heros/HighImpact'
import { LowImpactHero } from '@/modules/admin/heros/LowImpact'
import { MediumImpactHero } from '@/modules/admin/heros/MediumImpact'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
