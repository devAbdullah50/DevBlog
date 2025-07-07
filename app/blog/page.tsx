import React from 'react'
import { Metadata } from 'next'
import Card from '@/components/Card'
import Link from 'next/link'

const blog = () => {
    const data = [
        {
            id: 1,
            title: "first Blog",
            thumbnail: "thumbnail.jpg",
            auther: "Abdullah",
        },
        {
            id: 2,
            title: "second Blog",
            thumbnail: "thumbnail.jpg",
            auther: "Abdullah"
        },
        {
            id: 3,
            title: "third Blog",
            thumbnail: "thumbnail.jpg",
            auther: "Abdullah"
        },
        
    ]
  return (
    <div className='bg-gradient-to-r from-gray-900 to-black text-white min-h-[91.9vh] flex flex-col flex-wrap p-5'>
        <h2>Blogs</h2>
        <p>Here are blogs</p>
        <div className="cards flex flex-wrap gap-5 my-5 justify-center h-[400px] overflow-hidden">
            {
                data.map((value, index) => {
                    return <Link href={`blogpost/${value.id}`}><Card title={value.title.toUpperCase()} thumbnail={value.thumbnail} auther={value.auther} /></Link>
                })
            }
        </div>
    </div>
  )
}

export const metadata: Metadata = {
    title: "Blog | DevBlog",
    description: "Blog page of the DevBlog website",
  };

export default blog