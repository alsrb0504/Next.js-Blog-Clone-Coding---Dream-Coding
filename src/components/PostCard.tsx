import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { post: Post };

export default function PostCard({
  post: { category, date, description, title, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full text-center truncate">{description}</p>
          <span className="font-bold text-sm bg-green-100 rounded-lg px-2 md-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
