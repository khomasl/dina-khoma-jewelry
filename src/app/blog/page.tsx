import { match } from "ts-pattern";

import {CONTENT_BLOG} from "@/shared/constants/common";
import {BlogSection} from "@/widgets/BlogsSection";

export default function Page() {
    return CONTENT_BLOG.map(item =>
        match(item)
            .with({type: "otherCollections"}, (section) => <BlogSection section={section} />)
            .otherwise(() => null)
        )
}