import { getPostBySlug, getAllPosts } from "@/lib/getBlogPosts";
import { remark } from "remark";
import html from "remark-html";
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import { read } from 'to-vfile'
import { unified } from 'unified'
const slug = (await import("remark-slug")).default;
import { visit } from "unist-util-visit";
import slugify from "slugify";
import { Metadata } from 'next'

type Props = {
  params: {
    slug: string;
  };
};


export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function extractHeadings(markdown: string) {
  const tree = unified().use(remarkParse).parse(markdown);

  const headings: { text: string; id: string }[] = [];

  visit(tree, "heading", (node: any) => {
    if (node.depth === 2) {
      const text = node.children
        .filter((child: any) => child.type === "text")
        .map((child: any) => child.value)
        .join("");

      const id = slugify(text, { lower: true, strict: true });
      headings.push({ text, id });
    }
  });

  return headings;
}

export default async function BlogPostPage({ params }: Props) {
  const { content, meta } = getPostBySlug(params.slug);

  const toc = await extractHeadings(content);

  const file = await unified()
    .use(remarkParse)
    .use(slug)
    .use(remarkHtml)
    .process(content); // ✅ just the string

  const contentHTML = String(file);
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Main Blog Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
          <p className="text-sm text-zinc-400 mb-6">{meta.date}</p>

          <article
            className="prose prose-invert max-w-none markdown-body"
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          />
          <p className="mt-10 font-semibold text-white">
            Written by <span className="font-bold">{meta.author}</span>
          </p>

        </div>

        {/* Sidebar Table of Contents */}
        <aside className="hidden lg:block w-64 sticky top-28 h-fit border-l border-zinc-700 pl-6">
          <h2 className="text-lg font-semibold mb-4 text-white">On this page</h2>
          <nav className="flex flex-col gap-2 text-sm text-zinc-300">
            {toc.map((e) => (
              <a
                key={e.id}
                href={`#${e.id}`}
                className="hover:text-white transition-colors"
              >
                {e.text}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { meta } = getPostBySlug(params.slug);

  return {
    title: `${meta.title} | DevBlog`,
    description: meta.description || "Blog page of the DevBlog website",
  };
}