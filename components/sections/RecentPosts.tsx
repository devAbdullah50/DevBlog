import Link from "next/link";
import { getAllPosts } from "@/lib/getBlogPosts";

export default function RecentPosts() {
  const posts = getAllPosts().slice(0, 3); // top 3

  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Recent Blog Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-zinc-800 hover:bg-zinc-700 p-6 rounded-xl shadow-md transition-colors block"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-zinc-300 mb-4">{post.description}</p>
              <p className="text-xs text-zinc-400">{post.date}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="text-white font-medium border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
