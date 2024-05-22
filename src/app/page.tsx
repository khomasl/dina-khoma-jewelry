import { match } from "ts-pattern";

import { AboutSection, CollectionSection, FeaturesSection, FeedbackSection, HeroSection } from "@/widgets";
import { CONTENT } from "@/shared/constants";

export default function Page() {
    return CONTENT.main.map(item =>
        match(item)
            .with({type: "hero"}, (section) => <HeroSection section={section} />)
            .with({type: "aboutMe"}, (section) => <AboutSection section={section} />)
            .with({type: "features"}, (section) => <FeaturesSection section={section} />)
            .with({type: "currentCollections"}, (section) => <CollectionSection section={section} />)
            .with({type: "otherCollections"}, (section) => <CollectionSection section={section} />)
            .with({type: "feedback"}, (section) => <FeedbackSection section={section} />)
            .otherwise(() => null)
        )
  }