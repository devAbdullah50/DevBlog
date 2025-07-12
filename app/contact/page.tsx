import { Button } from '@/components/ui/button'
import React from 'react'

const contact = () => {
    return (
        <section className=''>
            <div className='flex markdown-body flex-col sm:w-lg w-full mx-auto my-5 h-fit bg-zinc-800 p-10 rounded-lg space-y-3'>
                <h2 className='border-b border-zinc-400 w-fit py-2 mb-5'>Contact Us</h2>
                <form action="" className='flex flex-col space-y-3'>

                    <label htmlFor="name">Name: </label>
                    <input type="text" required name='name' id='name' placeholder='Enter your name' className='bg-zinc-400 text-black placeholder:text-zinc-800 p-2 rounded' />
                    <label htmlFor="email">Email: </label>
                    <input type="email" required name='email' id='email' placeholder='Enter your email' className='bg-zinc-400 text-black placeholder:text-zinc-800 p-2 rounded' />
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" required id="message" rows={5} placeholder='Enter your message' className='bg-zinc-400 text-black placeholder:text-zinc-800 p-2 rounded' ></textarea>
                    <Button type='submit'>Submit</Button>

                </form>
            </div>
        </section>
    )
}

export default contact