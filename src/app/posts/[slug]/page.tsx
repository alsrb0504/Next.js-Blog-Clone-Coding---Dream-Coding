import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <>
      <h2>{post.title}</h2>
      <MarkdownViewer content={post.content} />
    </>
  );
}
