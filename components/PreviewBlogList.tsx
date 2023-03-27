"use client";

import { groq } from "next-sanity";
import { usePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";

type Props = {
  query: string;
};

// 1:21:30 video time;
export default function Previewblog({ query }: Props) {
  const posts = usePreview(null, query);
  return <BlogList posts={posts}></BlogList>;
}
