// ./src/sanity/schemaTypes/category.ts
import { defineField, defineType } from "sanity";

export const publicationCategoryType = defineType({
  name: "publicationCategory",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Order",
      description:
        "The order of this publication category, compared to other publication categories. Higher numbers appear first.",
    }),
  ],
});
