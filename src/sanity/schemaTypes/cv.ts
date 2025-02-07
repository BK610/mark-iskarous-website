import { defineField, defineType } from "sanity";

export const cvType = defineType({
  name: "cv",
  description: "Your CV, to be linked in the navigation bar.",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "Title of this Sanity entry. Not displayed on the website.",
    }),
    defineField({
      name: "file",
      type: "file",
      title: "File",
    }),
  ],
});
