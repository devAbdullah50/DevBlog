import React from 'react'
import { Metadata } from 'next'
import Card from '@/components/Card'
import Link from 'next/link'
import BlogPostCard from '@/components/BlogPostCard'
import { getPostBySlug, getAllPosts } from "@/lib/getBlogPosts";

const blog = () => {
     const Data = getAllPosts()
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gradient-to-r from-gray-900 to-black text-white">
            {Data.map((post) => (
                <BlogPostCard key={post.slug} {...post} />
            ))}
        </section>
    )
}

export const metadata: Metadata = {
    title: "Blog | DevBlog",
    description: "Blog page of the DevBlog website",
};


export default blog