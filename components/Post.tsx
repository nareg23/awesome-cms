import urlFor from "@/lib/urlFor";
import Image from "next/image";
import React from "react";

type Props = {
  post: Post;
};

const PostComponent = ({ post }: Props) => {
  return (
    <div key={post._id} className="flex flex-col group cursor-pointer bg-black">
      <div className="relative  h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
        <Image
          src={urlFor(post.mainImage).url()}
          className="object-cover object-left lg:object-center"
          alt={post.title}
          fill
        />
        <div
          className="absolute bottom-0 w-full bg-opacity-20
        bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between
      "
        >
          <div>
            <p>{post.title}</p>
            <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
            {post.categories.map((category) => (
              <div
                key={category.id}
                className="bg-teal-600 text-center text-white px-3 py-1
          rounded-full text-sm font-semibold"
              >
                {category.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostComponent;
