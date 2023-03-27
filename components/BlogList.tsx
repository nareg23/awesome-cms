import urlFor from "../lib/urlFor";
import Image from "next/image";
import React from "react";
import PostComponent from "./Post";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div className="flex  justify-center items-center">
      <hr className="border mb-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {posts?.map((post) => (
          <PostComponent key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
