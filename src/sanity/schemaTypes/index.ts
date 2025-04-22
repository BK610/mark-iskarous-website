// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { socialLinkType } from "./socialLink";
import { researchTopicType } from "./researchTopic";
import { homePageType } from "./homePage";
import { researchPageType } from "./researchPage";
import { teachingPageType } from "./teachingPage";
import { teachingPostType } from "./teachingPost";
import { publicationType } from "./publication";
import { publicationCategoryType } from "./publicationCategory";
import { cvType } from "./cv";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    socialLinkType,
    researchTopicType,
    homePageType,
    researchPageType,
    teachingPageType,
    teachingPostType,
    publicationType,
    publicationCategoryType,
    cvType,
  ],
};
