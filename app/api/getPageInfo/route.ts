export const revalidate = 86400;

import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { PageInfo } from "../../../typings";

export async function GET() {
  const query = groq`
    *[_type == 'pageInfo'][0]
`;
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  return new Response(JSON.stringify({ pageInfo }));
}
