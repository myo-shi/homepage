import { getAllPostIds, getPostData } from "@/lib/posts";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props) {
  const postData = await getPostData(params.id);
  const { id, title } = postData;

  return {
    title,
    openGraph: {
      title,
      images: "",
      url: `http://myo.io/posts/${id}`,
      type: "article",
    },
    twitter: {
      title,
      card: "summary_large_image",
    },
  };
}

// export const dynamicParams = false;

export function generateStaticParams() {
  const postIds = getAllPostIds();
  return postIds.map((postId) => ({ id: postId }));
}

export default async function Post({ params }: Props) {
  const postData = await getPostData(params.id);

  return (
    <article>
      <h1 className="text-3xl">{postData.title}</h1>
      <div className="mt-2">{postData.date}</div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
    </article>
  );
}
