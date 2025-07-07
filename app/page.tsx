"use client"
import { Button } from '@/components/ui/button';
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white min-h-[91.9vh] flex justify-center items-center">
      <div className='w-1/2 h-fit flex flex-col justify-between items-center space-y-5'>
        <div className='text-xl'>
          Hello I am <span className='text-primary'><Typewriter loop={false} words={["Abdullah", "Web Dev"]} /></span>
        </div>
        <div>
          In this blog i write about <span className='text-primary'><Typewriter loop={false} words={["Python", "Django", "NextJS", "React", "Express", "MongoDB", "My SQL"]} /></span>
        </div>
        <div className='flex gap-3'>
          <Link href="/blog"><Button>Read Blog</Button></Link>
          <Link href="/about"><Button variant={'secondary'}>About Me</Button></Link>
        </div>
      </div>
    </section>
  );
}
