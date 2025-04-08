import { defineField, defineType } from "sanity";

export const publicationType = defineType({
  name: "publication",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    // defineField({
    //   name: "tagline",
    //   type: "array",
    //   of: [{ type: "block" }],
    //   title: "Tagline",
    // }),
    defineField({
      name: "tagline",
      type: "text",
      title: "Tagline",
    }),
    defineField({
      name: "abstract",
      type: "array",
      of: [{ type: "block" }],
      title: "Abstract",
    }),
    defineField({
      name: "text",
      type: "array",
      of: [{ type: "block" }],
      title: "Text",
      description: "The actual, formatted text for the publication",
    }),
    defineField({
      name: "link",
      type: "url",
      title: "Link",
    }),
    defineField({
      name: "file",
      type: "file",
      title: "File",
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Order",
      description:
        "The order of this publication, within a category. Higher numbers appear first.",
    }),
    defineField({
      name: "publicationCategory",
      type: "reference",
      to: [{ type: "publicationCategory" }],
      title: "Publication Category",
    }),
    defineField({
      name: "researchTopics",
      type: "array",
      of: [{ type: "reference", to: [{ type: "researchTopic" }] }],
      title: "Research Topics",
      description: "Related research topics.",
    }),
  ],
});
