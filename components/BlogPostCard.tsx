import React from "react";
import Link from "next/link";

type BlogPostCardProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

const BlogPostCard = ({ title, description, date, slug }: BlogPostCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="h-full">
      <div className="flex flex-col justify-between bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl p-5 shadow transition-all duration-200 h-full">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-sm text-zinc-400 mt-1">{date}</p>
          <p className="text-zinc-300 mt-3 text-sm">{description}</p>
        </div>
        <div className="mt-4 text-sm text-primary font-medium underline hover:no-underline">
          Read more →
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;