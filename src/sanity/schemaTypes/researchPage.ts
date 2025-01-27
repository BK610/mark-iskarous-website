import { defineField, defineType } from "sanity";

export const researchPageType = defineType({
  name: "researchPage",
  title: "Research Page Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of this Sanity entry. Not displayed on the website.",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      description: "Title of the hero section.",
    }),
    defineField({
      name: "heroText",
      title: "Hero Text",
      type: "array",
      of: [{ type: "block" }],
      description: "Description for the hero section.",
    }),
  ],
});
