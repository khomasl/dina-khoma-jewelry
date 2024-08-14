import { match } from "ts-pattern";

import { 
    AboutSection, 
    CollectionSection, 
    FeaturesSection, 
    FeedbackSection, 
    HeroSection, 
    SliderSection 
} from "@/widgets";

import { CONTENT_HOMEPAGE } from "@/shared/constants";

export default function Page() {
    return CONTENT_HOMEPAGE.main.map(item =>
        match(item)
            .with({type: "hero"}, (section) => <HeroSection section={section} />)
            // .with({type: "aboutMe"}, (section) => <AboutSection section={section} />)
            // .with({type: "features"}, (section) => <FeaturesSection section={section} />)
            .with({type: "currentCollections"}, (section) => <CollectionSection section={section} />)
            .with({type: "feedback"}, (section) => <FeedbackSection section={section} />)
            .with({type: "otherCollections"}, (section) => <CollectionSection section={section} />)
            .with({type: "slider"}, (section) => <SliderSection className="hidden lg:flex" section={section} />)
            .otherwise(() => null)
        )
}