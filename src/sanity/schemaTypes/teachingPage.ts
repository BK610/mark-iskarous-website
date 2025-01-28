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
      name: "philosophyHeroTitle",
      title: "Philosophy Hero Title",
      type: "string",
      description: "Title of the philosophy hero section.",
    }),
    defineField({
      name: "philosophyHeroContent",
      title: "Philosophy Hero Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Content for the philosophy hero section.",
    }),
    defineField({
      name: "teachingExperienceContent",
      title: "Teaching Experience Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Content for the teaching experience section.",
    }),
  ],
});
