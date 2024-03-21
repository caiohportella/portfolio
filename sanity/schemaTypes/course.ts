import { defineType } from "sanity";

export default defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "courseTitle",
      title: "CourseTitle",
      type: "string",
    },
    {
      name: "institutionImage",
      title: "InstitutionImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "institutionName",
      title: "InstitutionName",
      type: "text",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "isInProgress",
      title: "IsInProgress",
      type: "boolean",
    },
  ],
});
