import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of this Sanity entry. Not displayed on the website.",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "blockContent",
      description: "Copy for the 'About' section.",
    }),
    defineField({
      name: "researchSubtitle",
      title: "Research Subtitle",
      type: "string",
      description: "Subtitle for the 'Research' section.",
    }),
  ],
});
