import FilterablePosts from "@/components/FilterablePosts";
import { getAllPosts } from "@/service/posts";
import React from "react";

export const metadata = {
  title: "All Posts",
  description: "풀스택 관련 블로그 글",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <main className="flex">
      <FilterablePosts posts={posts} categories={categories} />
    </main>
  );
}
