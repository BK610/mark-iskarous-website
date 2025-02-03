import { defineField, defineType } from "sanity";

export const teachingPostType = defineType({
  name: "teachingPost",
  title: "Teaching Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of this teaching post.",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Tagline for this teaching post. Short and sweet.",
    }),
    defineField({
      name: "teachingPostContent",
      title: "Teaching Post Content",
      type: "array",
      of: [{ type: "block" }],
      description: "Content for this teaching post.",
    }),
  ],
});
