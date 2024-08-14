import { match } from "ts-pattern";

import {
    CollectionSection,
} from "@/widgets";

import {CONTENT_COLLECTION} from "@/shared/constants/common";

export default function Page() {
    return CONTENT_COLLECTION.map(item =>
        match(item)
            .with({type: "otherCollections"}, (section) => <CollectionSection section={section} />)
            .with({type: "otherCollections"}, (section) => <CollectionSection section={section} />)
            .otherwise(() => null)
        )
}