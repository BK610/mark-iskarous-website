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
    defineField({
      name: "tagline",
      type: "string",
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
  ],
});
