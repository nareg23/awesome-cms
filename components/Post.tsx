import React from "react";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "./RichTextComponent";

type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  return (
    <article className="px-10 pb-28 ">
      <section className="space-y-2 border  border-teal-700">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full opacity-10 blur-sm p-10 ">
            <Image
              className="object-cover object-center mx-auto "
              src={urlFor(post?.mainImage).url()}
              alt={post.title}
              fill
            />
          </div>

          <section className="p-5 bg-teal-700 w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div className="">
                <h1 className="text-4xl text-white font-extrabold">
                  {post.title}
                </h1>
                <p className="text-white/30">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              </div>

              <div className="flex justify-end items-center space-x-2">
                <Image
                  className="rounded-full h-10 w-10 object-cover"
                  src={urlFor(post.author.image).url()}
                  height={50}
                  width={50}
                  alt={post.author.name}
                />

                <div className="w-64">
                  <h3 className="text-gray-300 font-semibold">
                    {post.author.name}
                  </h3>
                  <div>{/* author bio */}</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between  items-center pt-8">
              <h2 className="italic text-white/70">{post.summary}</h2>
              <div className="flex justify-end gap-1">
                {post.categories.map((category) => (
                  <p
                    className="py-1.5 px-3 bg-white rounded-lg font-semibold text-teal-700 shadow-lg shadow-white/30 uppercase"
                    key={category._id}
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <PortableText value={post.body} components={RichTextComponent} />
    </article>
  );
};

export default Post;
