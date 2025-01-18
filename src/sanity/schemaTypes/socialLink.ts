import { defineField, defineType } from "sanity";

export const socialLinkType = defineType({
  name: "socialLink",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name"
    }),
    defineField({
      name: "link",
      type: "url",
      title: "Link"
    }),
    defineField({
      name: "favicon",
      type: "string",
      title: "Favicon",
      description: "The URL or filepath for the icon to be shown for the social media site. Usually found at <SocialMediaSite.com/favicon.ico>."
    }),
  ],
});
