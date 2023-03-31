import PreviewSuspense from "@/components/PreviewSuspense";
import { previewData } from "next/headers";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import BlogList from "@/components/BlogList";
import Previewblog from "@/components/PreviewBlogList";

const Loading = () => {
  return (
    <div role="status">
      <p className="text-center text-lg animate-pulse">Loading Preview Data </p>
    </div>
  );
};

const query = groq`
*[_type == 'post'] {...,author->,categories[]->,body-> }
`;

export const revalidate = 30;
export default async function Page() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <Previewblog query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);

  return (
    <main className="">
      <BlogList posts={posts} />
    </main>
  );
}
