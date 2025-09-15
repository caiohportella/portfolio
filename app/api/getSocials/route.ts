export const revalidate = 86400;

import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { Social } from "../../../typings";

export async function GET() {
  const query = groq`
    *[_type == 'social']
`;
  const socials: Social[] = await sanityClient.fetch(query);
  return new Response(JSON.stringify({ socials }));
}
