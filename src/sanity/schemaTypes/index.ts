// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { categoryType } from "./category";
import { postType } from "./post";
import { socialLinkType } from "./socialLink";
import { researchTopicType } from "./researchTopic";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // authorType,
    // blockContentType,
    // categoryType,
    // postType,
    socialLinkType,
    researchTopicType,
  ],
};
