import { CONTENT } from "@/shared/constants";
import { HeroSection } from "@/widgets";
import { match } from "ts-pattern";

const Main = () => {
  return (
    <main>
      {CONTENT.main.map(item => 
        match(item)
        .with({type: "hero"}, (section) => <HeroSection section={section} />)
        .otherwise(() => null)
      )}
    </main>
  )
}

export default Main;