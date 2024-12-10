import { match } from "ts-pattern";

import {
    HeroSection,
} from "@/widgets";

import { cache } from 'react'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import {CollectionSection} from "@/widgets/CollectionSection";

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export default async function Page() {

  const page = await queryPageBySlug({
    slug: 'home',
  })

  console.log('page', page)

    return page.layout.map(item =>
        match(item)
            .with({blockType: 'hero-section'}, (section) => <HeroSection section={section} />)
          .with({blockType: 'collection-section'}, (section) => <CollectionSection section={section} />)
            // .with({type: "aboutMe"}, (section) => <AboutSection section={section} />)
            // .with({type: "features"}, (section) => <FeaturesSection section={section} />)
            // .with({type: "currentCollections"}, (section) => <CollectionSection section={section} />)
            // .with({type: "feedback"}, (section) => <FeedbackSection section={section} />)
            // .with({type: "otherCollections"}, (section) => <CollectionSection section={section} />)
            // .with({type: "slider"}, (section) => <SliderSection className="hidden lg:flex" section={section} />)
            .otherwise(() => null)
        )
}
