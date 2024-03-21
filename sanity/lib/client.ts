import { createClient } from 'next-sanity'

const apiVersion = process.env.SANITY_STUDIO_SANITY_API_VERSION || '2024-03-21';
const projectId = process.env.SANITY_STUDIO_PROJECT_ID!;
const dataset = process.env.SANITY_STUDIO_DATASET!;
const useCdn = false;

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
