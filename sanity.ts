import createImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const config = {
  dataset: process.env.SANITY_STUDIO_SANITY_DATASET || "production",
  projectId: '8kzhgkuz',
  apiVersion: process.env.SANITY_STUDIO_SANITY_API_VERSION || '2024-03-21',
  useCdn: process.env.NODE_ENV === "production",
};

// Set up the client for fetching data in the getProps page function
export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
