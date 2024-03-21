import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Course } from "../../typings";

const query = groq`
    *[_type == 'course'] 
`;

type Data = {
  courses: Course[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const courses: Course[] = await sanityClient.fetch(query);
  res.status(200).json({ courses });
}
