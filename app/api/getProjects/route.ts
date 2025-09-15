export const revalidate = 86400;

import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Project } from "../../../typings";

export async function GET() {
  const query = groq`
    *[_type == 'project'] {
      ...,
      technologies[]->
    }
`;
  const projects: Project[] = await sanityClient.fetch(query);
  return new Response(JSON.stringify({ projects }));
}
