// "use client";
`use client`; // Next.js 13 does not recognize use client..

import { Post } from "@/service/posts";
import { useState } from "react";
import PostsGrid from "./PostsGrid";
import CategoryNavbar from "./CategoryNavbar";

type Props = {
  posts: Post[];
  categories: string[];
};

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(posts);
  const filtered = (category: string) => {
    categories.includes(category)
      ? setSelected(posts.filter((post) => post.category === category))
      : setSelected(posts);
  };

  const ALL_POSTS = "All Posts";

  return (
    <section>
      <PostsGrid posts={selected} />
      <CategoryNavbar
        categories={[ALL_POSTS, ...categories]}
        onClick={filtered}
      />
    </section>
  );
}
