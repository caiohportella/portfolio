export const revalidate = 86400;

import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Skill } from "../../../typings";

export async function GET() {
  const query = groq`
    *[_type == 'skill']
`;
  const skills: Skill[] = await sanityClient.fetch(query);
  return new Response(JSON.stringify({ skills }));
}
