import {HeroSection} from "@/widgets";
import {CONTENT} from "@/shared/constants";
import {match} from "ts-pattern";

export default function Page() {
    return CONTENT.main.map(item =>
        match(item)
            .with({type: "hero"}, (section) => <HeroSection section={section} />)
            .otherwise(() => null)
        )
  }