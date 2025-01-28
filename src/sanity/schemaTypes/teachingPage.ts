import { defineField, defineType } from "sanity";

export const teachingPageType = defineType({
  name: "teachingPage",
  title: "Teaching Page Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of this Sanity entry. Not displayed on the website.",
    }),
    defineField({
      name: "teachingExperienceContent",
      title: "Teaching Experience Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Teaching Experience Content.",
    }),
  ],
});
