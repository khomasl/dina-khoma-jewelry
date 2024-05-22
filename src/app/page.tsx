import {AboutSection, CollectionSection, FeaturesSection, HeroSection} from "@/widgets";
import {CONTENT} from "@/shared/constants";
import {match} from "ts-pattern";

export default function Page() {
    return CONTENT.main.map(item =>
        match(item)
            .with({type: "hero"}, (section) => <HeroSection section={section} />)
            .with({type: "aboutMe"}, (section) => <AboutSection section={section} />)
            .with({type: "features"}, (section) => <FeaturesSection section={section} />)
            .with({type: "currentCollections"}, (section) => <CollectionSection section={section} />)
            .with({type: "otherCollections"}, (section) => <CollectionSection section={section} />)
            .otherwise(() => null)
        )
  }