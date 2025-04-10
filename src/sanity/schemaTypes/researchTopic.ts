// ./src/sanity/schemaTypes/category.ts
import { defineField, defineType } from "sanity";

export const researchTopicType = defineType({
  title: "Research Topic",
  name: "researchTopic",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Short Description",
      name: "shortDescription",
      type: "text",
      description: "A short description of the research topic. 1-2 lines.",
    }),
    defineField({
      title: "Long Description",
      name: "longDescription",
      type: "text",
      description: "A longer description of the research topic. 1 paragraph.",
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      description:
        "Image to display on the homepage (if featured) and the research topic page. Aim for a 3:2 width:height ratio.",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured",
      description: "Select to display this research topic on the homepage.",
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Order",
      description:
        "The order of this research topic. Higher numbers appear first.",
    }),
    defineField({
      title: "Publications",
      name: "publications",
      type: "array",
      of: [{ type: "reference", to: [{ type: "publication" }] }],
      description: "Related publications.",
    }),
  ],
});
