import { groq } from "next-sanity";
import React from "react";
import { client } from "@/lib/sanity.client";
import Post from "@/components/Post";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']{slug}`;
  const posts = await client.fetch(query);

  return posts.map((post: Post) => ({
    slug: post.slug.current,
  }));
}

const query = groq`*[_type == 'post' && slug.current == $slug][0]{
  ...,
  author->,
  categories[]->,
}`;

const page = async ({ params: { slug } }: Props) => {
  const post = await client.fetch(query, { slug });

  return (
    <div>
      <Post post={post}></Post>
    </div>
  );
};

export default page;
