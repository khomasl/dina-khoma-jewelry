import { match } from "ts-pattern";

import { 
    AboutSection,
    FeaturesSection,
} from "@/widgets";

import {CONTENT_ABOUT} from "@/shared/constants/common";

export default function Page() {
    return CONTENT_ABOUT.map(item =>
        match(item)
            .with({type: "features"}, (section) => <FeaturesSection section={section} />)
            .with({type: "aboutMe"}, (section) => <AboutSection section={section} />)
            .otherwise(() => null)
        )
}