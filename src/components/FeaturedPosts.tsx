import React from "react";
import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "@/service/posts";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h3 className="text-2xl font-bold">Featured Posts</h3>
      <PostsGrid posts={posts} />
    </section>
  );
}
