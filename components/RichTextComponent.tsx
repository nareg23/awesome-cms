import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value.asset).url()}
            alt={"post tag"}
            fill
          />
        </div>
      );
    },
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-semibold py-7">{children}</h1>
    ),
    h2: ({ children }: any) => <h1 className="text-2xl py-7">{children}</h1>,
    h3: ({ children }: any) => <h1 className="text-xl py-5">{children}</h1>,
    h4: ({ children }: any) => <h1 className="text-lg py-3">{children}</h1>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => <ol className="mt-2">{children}</ol>,

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      console.log(value);
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          className="underline decoration-teal-400 hover:decoration-black"
          href={value.href}
          rel={rel}
          target={rel ? "_blank" : ""}
        >
          {children}
        </Link>
      );
    },
  },
};
