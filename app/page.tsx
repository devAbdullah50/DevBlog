"use client"
import { Button } from '@/components/ui/button';
import { Typewriter } from 'react-simple-typewriter'
import Link from 'next/link';
import Image from 'next/image';
import { features } from '@/lib/data';
import SectionDivider from '@/components/SectionDivider';
import { Metadata } from 'next';

export default function Home() {
  return (
    <>
      <section className="min-h-[91.9vh] flex justify-center items-center">
        <div className='w-[420px] h-fit flex flex-col justify-between items-center space-y-5'>
          <div className='text-4xl block w-[317px] ml-1 text-start'>
            Hello I am <span className='text-primary'><Typewriter loop={false} words={["Abdullah", "Web Dev"]} /></span>
          </div>
          <div>
            In this blog i write about <span className='text-primary'><Typewriter loop={false} words={["Python", "Django", "NextJS", "React", "Express", "MongoDB", "My SQL"]} /></span>
          </div>
          <div className='flex gap-3'>
            <Link href="/blog" className='text-white'><Button>Read Blog</Button></Link>
            <Link href="/about"><Button variant={'secondary'}>About Me</Button></Link>
          </div>
        </div>
      </section>
      <SectionDivider />

      <section className="features min-h-screen bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Use This Blog?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-xl p-6 flex items-start gap-5 shadow-md"
              >
                <div className="shrink-0">
                  <Image src={feature.icon} width={50} height={50} alt={feature.title} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-zinc-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='my-10'>
          <SectionDivider />
        </div>
      </section>

    </>
  );
}
